import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.white};
  width: 100%;
  padding: 1.5em 0;
  position: fixed;
  z-index: 999;
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
    color: ${props => props.theme.colors.black};
    transition: color 0.5s;
    font-weight: 600;
    &:hover {
      color: ${props => props.theme.colors.red};
      transition: color 0.5s;
    }
  }
`

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="#top" exact>
              Top
            </Link>
          </li>
          <li>
            <Link to="#ourStory" exact>
              Our Story
            </Link>
          </li>
          <li>
            <Link to="#customs" exact>
              Customs & Traditions
            </Link>
          </li>
          <li>
            <Link to="#schedule" exact>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="#registry" exact>
              Registry
            </Link>
          </li>
          <li>
            <Link to="#" exact>
              Contact Us
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
