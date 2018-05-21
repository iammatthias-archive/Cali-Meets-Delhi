import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'
import Helmet from 'react-helmet'
import siteConfig from '../utils/siteConfig'
import styled, { ThemeProvider } from 'styled-components'
import globals from '../styles/global'
import theme from '../styles/theme'
import config from 'react-reveal/globals'
import favicon from '../images/favicon.ico'
config({ ssrFadeout: true })

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>{siteConfig.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={siteConfig.siteDescription} />
        <meta property="og:title" content={siteConfig.siteTitle} />
        <meta property="og:description" content={siteConfig.siteDescription} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.siteTitle} />
        <meta property="og:url" content="https://calimeetsdelhi.com/" />
        <link rel="apple-touch-icon" href="/logos/logo-512.png" />
        <link
          rel="shortcut icon"
          href="/logos/logo-512.png"
          type="image/x-icon"
        />
      </Helmet>
      {children()}
    </div>
  </ThemeProvider>
)

export default TemplateWrapper
