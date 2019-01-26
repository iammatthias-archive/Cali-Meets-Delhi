import React from 'react'
import Helmet from 'react-helmet'
import siteConfig from '../utils/siteConfig'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import Menu from '../components/Menu'
import theme from '../styles/theme'

import config from 'react-reveal/globals'
config({ ssrFadeout: true })

const Reset = createGlobalStyle`
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
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
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
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  #outer-container {
   overflow: visible !important;
 }
 &:focus {
  outline-color: transparent;
  outline-style: none;
}
  .noUnderline {
    text-decoration: none;
  }
  .hide {
    display: none;
    @media screen and (min-width: 52em) {
      display: block;
    }
  }
  .changeDirection {
    flex-direction: column-reverse;
    @media screen and (min-width: 52em) {
    flex-direction: row;
    }
  }
`
const Paint = createGlobalStyle`
:root {
    --color-base: #EDD9D5;
    --color-secondary: #F2E2DA;
    --color-tertiary: #100B00;
    --color-highlight: #FE5F55;
    --color-accent1: #223843;
    --color-accent2: #D77A61;
    --color-accent3: #870058;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-base: #100B00;
    --color-secondary: #E6E3E1;
    --color-tertiary: #F4DAD3;
    --color-highlight: #FE5F55;
    --color-accent: #FBF2F0; 
 }
}
html,
body {
  margin: 0;
  width: 100%;
  font-size: 16px;
  background: var(--color-base);
}
h1,
h2,
p,
i,
a,
.first-letter {
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 3em;
  text-align: left;
  margin-bottom: .5em;
}

h2 {
  font-size: 1.625em;
  font-weight: 900;
  padding: 0;
  margin: 3.5em 0 0 0;
  line-height: 2em;
}

h3 {
  padding: 0;
  margin: 3.5em 0 0 0;
  line-height: 2rem;
}

h1, h2 {
  &:first-child {margin: 0;}}

p, i, a {
  margin: .5em 0;
  font-family: "Lato";
  font-size: 1.25em;
  line-height: 1.58;
}

a {
  text-decoration: underline;
  color: var(--color-tertiary);
  transition: all 0.3s;
  &:hover {
    color: var(--color-accent1);
  }
}

blockquote {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: italic;
  line-height: 2.25em;
  overflow-wrap: break-word;
  margin: 2em 0 2em 0;
  padding: 0 0 0 3em;
  border-left: .75em solid lavender;
}

code, pre {
  font-size: 1em;
  border-radius: .25em;
  padding: .5em;
  line-height: 1.5em;
}

mark, .highlighted {
  background: lavender;
}

.first-letter {
  overflow-wrap: break-word;
  font-family: "Montserrat", sans-serif;
  font-size: 3.75em;
  line-height: 3.75em;
  display: block;
  position: relative;
  float: left;
  margin: 0 .5em 0 -.5em;
}

.subtitle {
  font-family: "Lato", sans-serif;
  color: var(--color-secondary);
  margin: 0 0 1.5em 0;
}

::selection{background-color: lavender}
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
      <Reset />
      <Paint />
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
