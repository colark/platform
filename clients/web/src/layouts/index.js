import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-safety-helmet";
import View from "../components/View";
//'bootstrap/dist/css/bootstrap.min.css';
const colarkLogo =
  "https://res.cloudinary.com/colark/image/upload/v1534549673/Colark%20Marketing%20Site/colark-logo.png";
const colarkIcon =
  "https://res.cloudinary.com/colark/image/upload/v1534806347/Colark%20Marketing%20Site/favicon.png?v2";
// UPDATE: The import statement above works fine during development. But the Bootstrap CSS will not be imported when you build your static site - gatsby build
// You can copy the minified CSS to into the ./src/layouts folder and change the import accordingly:
// './bootstrap.min.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
        {
          href:
            "https://fonts.googleapis.com/css?family=Mukta+Malar:400,600,700",
          rel: "stylesheet"
        },
        { rel: "icon", href: colarkIcon, type: "image/png" }
      ]}
      meta={[
        { property: "og:title", content: "Colark Inc" },
        { property: "og:url", content: "colark.com" },
        { property: "og:image", content: colarkLogo },
        { property: "og:site_name", content: "colark.com" },
        {
          property: "og:description",
          content: "scalable, distraction-free tech"
        },
        { property: "og:email", content: "ellie@colark.com" },
        // (below published time value is a timestamp)
        { property: "article:published_time", content: "" },
        { property: "article:author", content: "" },
        //facebook analytics
        { property: "fb:page_id", content: "" },
        { property: "fb:admins", content: "" },
        //twitter card
        { name: "twitter:title", content: "Colark Inc" },
        {
          name: "twitter:description",
          content: "scalable, distraction-free tech"
        },
        { name: "twitter:image", content: colarkLogo },
        { name: "twitter:image:alt", content: "" },
        { name: "twitter:card", content: "colark.com" },
        //google+
        { itemprop: "name", content: "Colark Inc" },
        { itemprop: "description", content: "scalable, distraction-free tech" },
        { itemprop: "image", content: colarkLogo },
        //pinterest
        { name: "pinterest-rich-pin", content: "false" }
      ]}
    />
    <div
      style={{
        margin: "0 auto",
        padding: 0,
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
