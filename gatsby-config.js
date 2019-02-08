module.exports = {
  siteMetadata: {
    title: 'Andrew Delos Reyes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/img`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quotes`,
        path: `${__dirname}/src/quotes`
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        path: `${__dirname}/src/quotes`,
        typeName: `Quotes`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-53762906-1`,
        head: false,
        anonymize: true,
      },
    },
  ],
}