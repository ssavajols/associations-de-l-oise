module.exports = {
    pathPrefix: '/associations-de-l-oise',
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            pathToConfigModule: 'src/theme/index.js',
        },
    ],
}
