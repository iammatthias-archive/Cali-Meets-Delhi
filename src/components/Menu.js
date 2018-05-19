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
  padding: 1.5rem 0;
  ul {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
}
li {
  display: block;
  margin-left: 1em;
  padding: .8rem 0rem;
}
a {
  text-decoration: none;
  color: ${props => props.theme.colors.red};
  font-weight: 600;
  transition: all .5s;

`

const showSettings = evt => {
  evt.preventDefault()
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
    background: '#852827',
    height: '5px',
  },
  bmCrossButton: {
    height: '25px',
    width: '25px',
    top: '25px',
  },
  bmCross: {
    background: '#852827',
  },
  bmMenu: {
    padding: '1em 0',
    fontSize: '2em',
  },
  bmMorphShape: {
    fill: '#223843',
  },
  bmOverlay: {
    background: 'rgba(252, 248, 247,.8)',
  },
}

const Menu = () => {
  return (
    <Header>
      <MenuMobile styles={styles} isOpen={false}>
        <ul>
          <li>
            <Link to="/" exact>
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
            <Link to="#contact" exact>
              Contact Us
            </Link>
          </li>
        </ul>
      </MenuMobile>
    </Header>
  )
}

export default Menu
