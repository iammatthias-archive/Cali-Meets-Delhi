import React from 'react'
import Helmet from 'react-helmet'
import siteConfig from '../utils/siteConfig'
import { injectGlobal, ThemeProvider } from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'
import config from 'react-reveal/globals'
config({ ssrFadeout: true })

injectGlobal`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    color: #223843;
  }

  /* Added to Fix Footer to bottom of viewport */
  html, body {
    background: #f5efe9;
  }
  .siteRoot {

    display: flex;
    flex-direction: column;
  }
  .siteContent {
    flex: 1 0 auto;
    top: 0;
    position: absolute;
    width: 100%;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul, li {
    list-style: none;
    margin: 0 !important;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  #lightboxBackdrop img {
    width: auto !important;
  }
`

const Layout = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <html lang="en" />
        <title>{siteConfig.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#D77A61" />
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

      <ThemeProvider theme={theme}>
        <div id="outer-container">
          <Menu />

          <div className="siteContent" id="page-wrap">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
