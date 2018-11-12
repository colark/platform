require("isomorphic-fetch");
import React from "react";
import express from "express";
import httpProxy from "http-proxy";
import toHtmlString from "./template";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router";
import { getDataFromTree } from "react-apollo";
import { ServerStyleSheet } from "styled-components";
import { renderStylesToString } from "emotion-server";
import makeShell from "./makeShell";
import makeApolloClient from "./makeApolloClient";

export default (App, options) => {
  const app = express();

  //make js bundles be served from this server
  app.use("/bundle", express.static(options.BUNDLE_DIRECTORY));
  app.use(express.static("web"));
  app.use("/", express.static(options.PUBLIC_DIRECTORY));
  app.use("*", function(req, res) {
    const context = {};
    const sheet = new ServerStyleSheet();

    const apolloClient = makeApolloClient({
      uri: options.API_ENDPOINT,
      links: options.apolloLinks,
      ssrMode: true
    });

    const RoutedApp = (
      <StaticRouter location={req.originalUrl} context={context}>
        {makeShell(App, { apolloClient })}
      </StaticRouter>
    );

    getDataFromTree(RoutedApp).then(() => {
      const content = renderStylesToString(
        ReactDOM.renderToString(sheet.collectStyles(RoutedApp))
      );
      const initialState = apolloClient.extract();
      const styleTags = sheet.getStyleTags();

      res.status(200);
      res.send(
        toHtmlString(
          content,
          initialState,
          styleTags,
          options.API_ENDPOINT,
          options.BUNDLE_PATH,
          options.HEADER_FRAGMENT
        )
      );
      res.end();
    });
  });

  app.listen(3000, function(err) {
    console.log("Calling app.listen's callback function.");
    console.log(err);
  });
};
