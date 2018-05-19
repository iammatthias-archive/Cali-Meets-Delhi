import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { slide as SideMenu } from 'react-burger-menu'
import { anchorate } from 'anchorate'

exports.onRouteUpdate = () => {
  anchorate()
}

const Header = styled.header`
  background: ${props => props.theme.colors.white};
  width: 75px;
  height: 75px;
  position: fixed;
  z-index: 999;
`

const BurgerMenuWrapper = styled.i`
  display: none;
`

const MenuMobile = styled(SideMenu)`
  padding: 1.5em 0;
  ul {
  display: flex;
  justify-content: space-between;
}
li {
  display: block;
  margin-left: 1em;
  padding: .5rem 0rem;
}
a {
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-weight: 600;
  transition: all .2s;
  &:hover {
    color: ${props => props.theme.colors.black};
  }
  .bm-item-list a {
    color: ${props => props.theme.colors.black};
    padding: 1rem 2rem;
    text-decoration: none;
  }
`

const showSettings = evt => {
  evt.preventDefault()
}

const activeLinkStyle = {
  color: 'white',
  borderBottom: '2px solid white',
}

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '30px',
    height: '30px',
    left: '23px',
    top: '24px',
  },
  bmBurgerBars: {
    background: '#223843',
    height: '5px',
  },
  bmCrossButton: {
    height: '25px',
    width: '25px',
    top: '25px',
  },
  bmCross: {
    background: '#223843',
  },
  bmMenu: {
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#223843',
  },
  bmItemList: {
    color: '#223843',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(252, 248, 247,.618)',
  },
}

const Menu = () => {
  return (
    <Header>
      <MenuMobile styles={styles} isOpen={false}>
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
      </MenuMobile>
    </Header>
  )
}

export default Menu
