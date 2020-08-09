/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`

      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Maicol Duque",
        short_name: "Maicol Duque",
        start_url: "/",
        background_color: "#2d564e",
        theme_color: "#2d564e",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "minimal-ui",
        icon: "src/img/MaicolDuque.jpeg", // This path is relative to the root of the site.
       
      },
    },    
  ]
}
