require("isomorphic-fetch");
import React from "react";
import express from "express";
import httpProxy from "http-proxy";
import toHtmlString from "./template";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router";
import { getDataFromTree, ApolloProvider } from "react-apollo";
import { ServerStyleSheet } from "styled-components";
import { renderStylesToString } from "emotion-server";
import makeShell from "./makeShell";
import makeApolloClient from "./makeApolloClient";
import { HelmetProvider, createHelmetStore } from "react-safety-helmet";
// import Radium from "radium";
const fs = require("fs");
// const matchMediaMock = require("match-media-mock").create();
// Radium.Config.setMatchMedia(matchMediaMock);

const proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

export default (App, options) => {
  const INDEX_HTML = fs.readFileSync(
    options.PUBLIC_DIRECTORY + "/template.html",
    {
      encoding: "utf-8"
    }
  );

  const parsedIndexHTML = INDEX_HTML.replace(
    `{{componentHeaderFragment}}`,
    options.HEADER_FRAGMENT
  ).replace(`{{apiEndpoint}}`, options.API_ENDPOINT);

  const app = express();

  //make js bundles be served from this server
  const oneDay = 86400000;

  app.use(
    "/bundle",
    express.static(options.BUNDLE_DIRECTORY, {
      maxage: oneDay,
      etag: false
    })
  );

  app.use(
    "/src/components",
    express.static("./clients/web/src/components", {
      maxage: oneDay,
      etag: false
    })
  );

  options.serverRoutes.forEach(([path, routeFnBuilder]) => {
    app.use(
      path,
      routeFnBuilder({ express, publicDir: options.PUBLIC_DIRECTORY })
    );
  });

  app.use(
    "/",
    express.static(options.PUBLIC_DIRECTORY, {
      maxage: oneDay,
      etag: false
    })
  );

  app.use("*", function(req, res) {
    const context = {};
    const sheet = new ServerStyleSheet();

    const apolloClient = makeApolloClient({
      uri: options.API_ENDPOINT,
      links: options.apolloLinks,
      ssrMode: true
    });

    const helmetStore = createHelmetStore();

    const Entry = options.ENTRY;

    const RoutedApp = (
      <StaticRouter location={req.originalUrl} context={context}>
        <HelmetProvider store={helmetStore}>
          <ApolloProvider client={apolloClient}>
            <Entry radiumConfig={{ userAgent: req.headers["user-agent"] }} />
          </ApolloProvider>
        </HelmetProvider>
      </StaticRouter>
    );

    getDataFromTree(RoutedApp).then(() => {
      // matchMediaMock.setConfig({
      //   type: "screen",
      //   width: "1200px"
      // });
      const renderedToString = ReactDOM.renderToString(
        sheet.collectStyles(RoutedApp)
      );
      const helmet = helmetStore.renderStatic();
      const metaTags = `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
      `;
      const content = renderStylesToString(renderedToString);
      const initialState = apolloClient.extract();
      const styleTags = sheet.getStyleTags();

      const finalIndexHtml = parsedIndexHTML
        .replace(
          `{{apolloState}}`,
          JSON.stringify(initialState).replace(/</g, "\\u003c")
        )
        .replace(`{{appContent}}`, content)
        .replace("{{styleTags}}", styleTags)
        .replace("{{metaTags}}", metaTags);

      res.status(200);
      res.set("Cache-Control", "public, max-age=180");
      res.send(finalIndexHtml);
      res.end();
    });
  });

  app.listen(process.env.PORT || 3000, function(err) {
    console.log("Calling app.listen's callback function.");
    console.log(err);
  });
};
