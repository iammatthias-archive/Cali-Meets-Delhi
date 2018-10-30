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
  margin: 0.5rem;
  right: 0;
  float: right;
  width: 65px;
  height: 65px;
  fill: ${props => props.theme.colors.accent2} !important;
  &:hover {
    fill: ${props => props.theme.colors.accent1} !important;
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
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 100 100"
              x="0px"
              y="0px"
            >
              <title>Artboard 15</title>
              <path d="M50.15,86.16A36,36,0,1,0,24.7,75.61,35.76,35.76,0,0,0,50.15,86.16Zm-24-60a34,34,0,1,1,0,48.08A33.78,33.78,0,0,1,26.11,26.11Z" />
              <rect x="35.28" y="33.84" width="29.75" height="5" />
              <rect x="35.28" y="43.72" width="19.49" height="5" />
              <rect x="35.28" y="53.59" width="10.07" height="5" />
              <rect x="35.28" y="64.47" width="19.49" height="5" />
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
              <Link
                onClick={() => this.closeMenu()}
                to="https://zola.com/registry/trishaandmatthias"
              >
                Registry
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
