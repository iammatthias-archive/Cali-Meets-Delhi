import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.secondary};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
  }

  a {
    text-decoration: none;
    color: #121212;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: red;
    }
  }
`

const activeLinkStyle = {
  color: '#121212',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Customs
            </Link>
          </li>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Registry
            </Link>
          </li>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Questions
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
