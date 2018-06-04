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
              <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzIwMCcgd2lkdGg9JzIwMCcgIGZpbGw9IiMwMDAwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxOCAyMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPkdyb3VwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTEuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTUsOCBMMS45OTUwODkyOSw4IEMwLjg5MjYyMjc5OSw4IDAsOC44OTE3OTY5MyAwLDkuOTkxODg0MTkgTDAsMjEuMDA4MTE1OCBDMCwyMi4xMDY2MDI3IDAuODkzMjMxOTAyLDIzIDEuOTk1MDg5MjksMjMgTDE2LjAwNDkxMDcsMjMgQzE3LjEwNzM3NzIsMjMgMTgsMjIuMTA4MjAzMSAxOCwyMS4wMDgxMTU4IEwxOCw5Ljk5MTg4NDE5IEMxOCw4Ljg5MzM5NzMzIDE3LjEwNjc2ODEsOCAxNi4wMDQ5MTA3LDggTDEzLDggTDEzLDkuNSBMMTYuNSw5LjUgTDE2LjUsMjEuNSBMMS41LDIxLjUgTDEuNSw5LjUgTDUsOS41IEw1LDggWiI+PC9wYXRoPjxyZWN0IHg9IjguMjUiIHk9IjIiIHdpZHRoPSIxLjUiIGhlaWdodD0iMTMiIHJ4PSIwLjc1Ij48L3JlY3Q+PHJlY3QgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy40MDkwMTAsIDMuNDA5MDEwKSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTcuNDA5MDEwLCAtMy40MDkwMTApICIgeD0iNi42NTkwMSIgeT0iMC40MDkwMDk2MzQiIHdpZHRoPSIxLjUiIGhlaWdodD0iNiIgcng9IjAuNzUiPjwvcmVjdD48cmVjdCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC41OTA5OTAsIDMuNDA5MDEwKSByb3RhdGUoMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMC41OTA5OTAsIC0zLjQwOTAxMCkgIiB4PSI5Ljg0MDk5IiB5PSIwLjQwOTAxMDM2NiIgd2lkdGg9IjEuNSIgaGVpZ2h0PSI2IiByeD0iMC43NSI+PC9yZWN0PjwvZz48L2c+PC9zdmc+" />
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
