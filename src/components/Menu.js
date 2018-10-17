import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { push as SideMenu } from 'react-burger-menu'
import Headroom from 'react-headroom'

const Header = styled.header`
  position: relative;
  width: 100%;
`
const Icon = styled.div`
  z-index: 1 !important;
  transition: 0.5s ease;
  padding: 0.95rem;
  right: 0;
  float: right;
  background: ${props => props.theme.colors.accent2};
  width: 65px;
  height: 65px;
  fill: ${props => props.theme.colors.accent1} !important;
  &:hover {
    fill: ${props => props.theme.colors.accent2} !important;
    background: ${props => props.theme.colors.accent1} !important;
  }
`
const MenuMobile = styled(SideMenu)`
  z-index: 100;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
  li {
    display: block;
    margin-left: 1em !important;
    padding: 0.8rem 0;
  }
  a {
    font-family: 'Abril Fatface', sans-serif;
    text-decoration: none;
    color: ${props => props.theme.colors.accent1};
    font-weight: 600;
    transition: all 0.5s;
  }
`
const Text = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  p {
    color: ${props => props.theme.colors.accent1};
    padding-right: 2rem;
  }
  img {
    height: 25px;
    width: 25px;
    display: inline-block;
    padding-right: 0.5rem;
    fill: ${props => props.theme.colors.accent1};
  }
`

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '25px',
    height: '25px',
    left: '20px',
    top: '20px',
  },
  bmCrossButton: {
    height: '35px',
    width: '35px',
    top: '25px',
    right: '25px',
  },
  bmCross: {
    background: '#D77A61',
  },
  bmMenu: {
    padding: '1em 0',
    fontSize: '2em',
    height: '100vh',
    background: '#F2E2DA',
  },
  bmMenuWrap: {
    height: '100vh',
    top: '0',
  },
  bmOverlay: {
    background: 'transparent',
  },
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Header>
        <Headroom>
          <Icon onClick={() => this.toggleMenu()}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 220 221"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(1,0,0,1,-40.5,-39.3)">
                <g transform="matrix(-1,0,-0,1,300.9,0)">
                  <path d="M189.6,62.1L51.9,62.1C45.6,62.1 40.5,57 40.5,50.7C40.5,44.4 45.6,39.3 51.9,39.3L189.6,39.3C195.9,39.3 201,44.4 201,50.7C201,57 195.9,62.1 189.6,62.1Z" />
                </g>
                <g transform="matrix(-1,0,-0,1,300.9,0)">
                  <path d="M249,161.1L51.9,161.1C45.6,161.1 40.5,156 40.5,149.7C40.5,143.4 45.6,138.3 51.9,138.3L249,138.3C255.3,138.3 260.4,143.4 260.4,149.7C260.4,156 255.3,161.1 249,161.1Z" />
                </g>
                <g transform="matrix(-1,0,-0,1,300.9,0)">
                  <path d="M189.6,260.1L51.9,260.1C45.6,260.1 40.5,255 40.5,248.7C40.5,242.4 45.6,237.3 51.9,237.3L189.6,237.3C195.9,237.3 201,242.4 201,248.7C201,255 195.9,260.1 189.6,260.1Z" />
                </g>
              </g>
            </svg>
          </Icon>
        </Headroom>
        <MenuMobile
          styles={styles}
          right
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          customBurgerIcon={false}
        >
          <ul>
            <li>
              <Link onClick={() => this.closeMenu()} to="/">
                Top
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="#ourStory">
                Our Story
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="#gallery">
                Pictures
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="#events">
                Events
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="#contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Text>
                <img
                  alt="Add to homescreen"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='200' width='200' fill='%23D77A61' viewBox='0 0 18 22' version='1.1' x='0px' y='0px'%3E%3Ctitle%3EGroup%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate%280.000000, -1.000000%29' fill='%23D77A61'%3E%3Cpath d='M5,8 L1.99508929,8 C0.892622799,8 0,8.89179693 0,9.99188419 L0,21.0081158 C0,22.1066027 0.893231902,23 1.99508929,23 L16.0049107,23 C17.1073772,23 18,22.1082031 18,21.0081158 L18,9.99188419 C18,8.89339733 17.1067681,8 16.0049107,8 L13,8 L13,9.5 L16.5,9.5 L16.5,21.5 L1.5,21.5 L1.5,9.5 L5,9.5 L5,8 Z'/%3E%3Crect x='8.25' y='2' width='1.5' height='13' rx='0.75'/%3E%3Crect transform='translate%287.409010, 3.409010%29 rotate%2845.000000%29 translate%28-7.409010, -3.409010%29 ' x='6.65901' y='0.409009634' width='1.5' height='6' rx='0.75'/%3E%3Crect transform='translate%2810.590990, 3.409010%29 rotate%28135.000000%29 translate%28-10.590990, -3.409010%29 ' x='9.84099' y='0.409010366' width='1.5' height='6' rx='0.75'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                />
                <p>
                  Click the share icon on your mobile device to add this site to
                  your homescreen.
                </p>
              </Text>
            </li>
          </ul>
        </MenuMobile>
      </Header>
    )
  }
}

export default Menu
