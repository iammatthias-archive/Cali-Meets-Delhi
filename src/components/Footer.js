import React from 'react'
import styled from 'styled-components'

import { Box } from 'rebass'

const Wrapper = styled(Box)`
  position: relative;
  background: var(--color-base);
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  font-size: 0.75rem;
  @media screen and (min-width: 40em) {
    width: auto;
  }
  a {
    display: inline-block;
    padding: 0.25rem;
    font-weight: 600;
    transition: all 0.2s;
    color: var(--color-black;
    &:hover {
      color: var(--color-highlight);
    }
    &:visited {
      color: var(--color-base);
    }
  }
`

const Footer = () => (
  <Wrapper p={[4, 5]}>
    <List>
      <Item>
        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            style={{ height: '35px' }}
            alt="Powered by Contentful"
          />
        </a>
        <a
          href="https://www.netlify.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://cdn.netlify.com/1e66438712c70d3dfdcfe11f31e467864f94b803/b2c28/img/press/logos/full-logo-light.svg"
            style={{ height: '35px' }}
            alt="Powered by Contentful"
          />
        </a>
      </Item>
      <Item>
        Built by
        <a
          href="https://iammatthias.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          @iammatthias
        </a>
        <br />
        Source:{' '}
        <a
          href="https://github.com/iammatthias/Cali-Meets-Delhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br />
        Photo Credit:{' '}
        <a
          href="http://weddings.jenniferlourie.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jennifer Lourie
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
