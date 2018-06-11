import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  background: ${props => props.theme.colors.bg2};
  width: 100%;
`

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  font-size: 0.75rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    display: inline-block;
    padding: 0 0.5rem;
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Foot>
    <Wrapper>
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
        </Item>
      </List>
    </Wrapper>
  </Foot>
)

export default Footer
