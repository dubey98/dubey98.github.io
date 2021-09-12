module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Shiv Dubey",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: "./static/favicon.svg",
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
