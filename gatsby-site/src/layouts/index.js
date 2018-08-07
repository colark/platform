import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
// UPDATE: The import statement above works fine during development. But the Bootstrap CSS will not be imported when you build your static site - gatsby build
// You can copy the minified CSS to into the ./src/layouts folder and change the import accordingly:
// import './bootstrap.min.css';

import ReactNavbar from '../components/Navbar'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { property: 'og:title', content: 'Colark Inc'},
        { property: 'og:url', content: 'colark.com' },
        { property: 'og:image', content: '' },
        { property: 'og:site_name', content: 'colark.com' },
        { property: 'og:description', content: 'Learn about Colark'},
        { property: 'og:email', content: 'ellie@colark.com' },
        // (below published time value is a timestamp)
        { property: 'article:published_time', content: '' },
        { property: 'article:author', content: '' },
        //facebook analytics
        { property: 'fb:page_id', content: '' },
        { property: 'fb:admins', content: '' },
        //twitter card
        { name: 'twitter:title', content: 'Colark Inc' },
        { name: 'twitter:description', content: 'Learn about Colark' },
        { name: 'twitter:image', content: '' },
        { name: 'twitter:image:alt', content: '' },
        { name: 'twitter:card', content: 'colark.com' },
        //google+
        { itemprop: 'name', content: 'Colark Inc' },
        { itemprop: 'description', content: 'Learn about Colark' },
        { itemprop: 'image', content: '' },
        //pinterest
        { name: 'pinterest-rich-pin', content: 'false' }
      ]}
    />
    <ReactNavbar siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
