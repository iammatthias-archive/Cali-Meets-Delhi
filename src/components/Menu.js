import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { push as SideMenu } from 'react-burger-menu'
import Headroom from 'react-headroom'

const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Icon = styled.div`
  z-index: 1 !important;
  transition: 0.5s ease;
  margin: 0.5rem;
  right: 0;
  float: right;
  width: 65px;
  height: 65px;
  fill: var(--color-tertiary) !important;
  &:hover {
    fill: var(--color-highlight) !important;
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
    color: var(--color-tertiary);
    font-weight: 600;
    transition: all 0.5s;
    &:hover {
      color: var(--color-highlight) !important;
    }
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
    background: '#2F3649',
  },
  bmMenu: {
    padding: '1em 0',
    fontSize: '1.5em',
    height: '100vh',
    background: '#F9DBDE',
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
              <Link onClick={() => this.closeMenu()} to="/#top">
                Top
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/#events">
                Info
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/#ourstory">
                Our Story
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/#faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/#registry">
                Registry
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/#gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </MenuMobile>
      </Header>
    )
  }
}

export default Menu
