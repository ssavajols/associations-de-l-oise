module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/theme/index.js'
            }
        }
    ]
}
