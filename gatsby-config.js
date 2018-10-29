module.exports = {
  siteMetadata: {
    title: 'ReactiveConf Prague 2018',
    author: 'Ondřej Chrastina',
    description: 'Notes from the ReactiveConf 2018 held in Prague 2018-10-29.',
    siteUrl: 'https://simply007.github.io/ReactiveConfPrague2018/',
  },
  pathPrefix: '/ReactiveConfPrague2018',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-128307780-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ReactiveConf Prague 2018`,
        short_name: `ReactiveConf`,
        start_url: `/ReactiveConfPrague2018/`,
        background_color: `#ffffff`,
        theme_color: `#0B2D43`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
