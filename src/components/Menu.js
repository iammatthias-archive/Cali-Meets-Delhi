import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { slide as SideMenu } from 'react-burger-menu'
import { anchorate } from 'anchorate'

exports.onRouteUpdate = () => {
  anchorate()
}

const Header = styled.header`
  background: ${props => props.theme.colors.accent2};
  width: 75px;
  height: 75px;
  position: fixed;
  z-index: 999;
`

const BurgerMenuWrapper = styled.i`
  display: none;
`

const MenuMobile = styled(SideMenu)`
  padding: 4rem 0;
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
  color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  transition: all .5s;
`
const Text = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  p {
    color: ${props => props.theme.colors.accent1};
  }
  img {
    height: 25px;
    width: 25px;
    display: inline-block;
    padding-right: 0.5rem;
    fill: color: ${props => props.theme.colors.accent1};
  }
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
    background: '#EFF1F3',
    height: '5px',
  },
  bmCrossButton: {
    height: '25px',
    width: '25px',
    top: '25px',
  },
  bmCross: {
    background: '#D77A61',
  },
  bmMenu: {
    padding: '1em 0',
    fontSize: '2em',
  },
  bmMorphShape: {
    fill: '#223843',
  },
  bmOverlay: {
    background: 'rgba(252, 248, 247,.9)',
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
          <li>
            <Text>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='200' width='200' fill='%23D77A61' viewBox='0 0 18 22' version='1.1' x='0px' y='0px'%3E%3Ctitle%3EGroup%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate%280.000000, -1.000000%29' fill='%23D77A61'%3E%3Cpath d='M5,8 L1.99508929,8 C0.892622799,8 0,8.89179693 0,9.99188419 L0,21.0081158 C0,22.1066027 0.893231902,23 1.99508929,23 L16.0049107,23 C17.1073772,23 18,22.1082031 18,21.0081158 L18,9.99188419 C18,8.89339733 17.1067681,8 16.0049107,8 L13,8 L13,9.5 L16.5,9.5 L16.5,21.5 L1.5,21.5 L1.5,9.5 L5,9.5 L5,8 Z'/%3E%3Crect x='8.25' y='2' width='1.5' height='13' rx='0.75'/%3E%3Crect transform='translate%287.409010, 3.409010%29 rotate%2845.000000%29 translate%28-7.409010, -3.409010%29 ' x='6.65901' y='0.409009634' width='1.5' height='6' rx='0.75'/%3E%3Crect transform='translate%2810.590990, 3.409010%29 rotate%28135.000000%29 translate%28-10.590990, -3.409010%29 ' x='9.84099' y='0.409010366' width='1.5' height='6' rx='0.75'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" />
              <p>
                Click the share icon on mobile to add this site to your
                homescreen.
              </p>
            </Text>
          </li>
        </ul>
      </MenuMobile>
    </Header>
  )
}

export default Menu
