module.exports = {
  siteMetadata: {
    title: `AM Blog`,
    author: `Andrew McLaughlin`,
    description: `The official blog of Andrew McLaughlin`,
    siteUrl: `https://blog.andrewmclaughl.in/`,
    social: {
      github: `https://github.com/LaikaFusion`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "lightgrey",

            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew McLaughlin's Blog`,
        short_name: `AM Blog`,
        start_url: `/`,
        background_color: `lightgrey`,
        theme_color: `#386C0B`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
