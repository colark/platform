module.exports = {
  siteMetadata: {
    title: 'Colark',
  },
  plugins: ['gatsby-plugin-react-helmet'],
    //   {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
