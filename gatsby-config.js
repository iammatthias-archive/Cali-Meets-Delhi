require('dotenv').config()
const config = require('./src/utils/siteConfig')

// If the contentfulConfig can't be found assume the site is being built via Netlify with production environment variables
try {
  var contentfulConfig = require('./.contentful')
} catch (e) {
  // eslint-disable-next-line
  var contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cali Meets Delhi',
        short_name: 'Cali&Delhi',
        start_url: '/',
        background_color: '#FCF8F7',
        theme_color: '#FCF8F7',
        display: 'minimal-ui',
        icon: 'static/logos/logo-512.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://calimeetsdelhi.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#EDBD2E',
        showSpinner: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
