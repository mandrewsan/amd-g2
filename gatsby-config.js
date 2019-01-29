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
  ],
}
