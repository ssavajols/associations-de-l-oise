module.exports = {
  siteMetadata: {
    title: `Blah Blah Fake Title`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      pathToConfigModule: 'src/theme/index.js'
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ]  
}
