import React, { Component } from 'react'
import styled from 'styled-components'

const InstallPopup = styled.div`
  margin-bottom: 1rem;
  position: relative;
  background: #f2f8ff;
  color: #303030;
  left: 0;
  right: 0;
  bottom: 15px;
  display: flex;
  padding: 5px 10px;
  font-size: 12px;
  align-items: center;
  border-radius: 5px;
  padding-bottom: 10px;

  &:after,
  :before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #f2f8ff;
    border-width: 15px;
    margin-left: -15px;
  }

  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #f9f6f1;
    border-width: 16px;
    margin-left: -16px;
  }
`

class AddToHomescreen extends Component {
  state = {
    showInstallMessage: false,
    online: true,
  }
  componentWillMount() {
    if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
      if (!window.navigator.standalone) {
        this.setState({ showInstallMessage: true })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('online', () => this.setOnlineStatus(true))
    window.addEventListener('offline', () => this.setOnlineStatus(false))
  }

  componentWillUnmount() {
    window.removeEventListener('online')
    window.removeEventListener('offline')
  }

  setOnlineStatus = isOnline => this.setState({ online: isOnline })

  render() {
    const { showInstallMessage, online } = this.state
    return (
      <InstallPopup>
        Install this webapp on your iPhone: tap
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='200' width='200' fill='%23D77A61' viewBox='0 0 18 22' version='1.1' x='0px' y='0px'%3E%3Ctitle%3EGroup%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate%280.000000, -1.000000%29' fill='%23D77A61'%3E%3Cpath d='M5,8 L1.99508929,8 C0.892622799,8 0,8.89179693 0,9.99188419 L0,21.0081158 C0,22.1066027 0.893231902,23 1.99508929,23 L16.0049107,23 C17.1073772,23 18,22.1082031 18,21.0081158 L18,9.99188419 C18,8.89339733 17.1067681,8 16.0049107,8 L13,8 L13,9.5 L16.5,9.5 L16.5,21.5 L1.5,21.5 L1.5,9.5 L5,9.5 L5,8 Z'/%3E%3Crect x='8.25' y='2' width='1.5' height='13' rx='0.75'/%3E%3Crect transform='translate%287.409010, 3.409010%29 rotate%2845.000000%29 translate%28-7.409010, -3.409010%29 ' x='6.65901' y='0.409009634' width='1.5' height='6' rx='0.75'/%3E%3Crect transform='translate%2810.590990, 3.409010%29 rotate%28135.000000%29 translate%28-10.590990, -3.409010%29 ' x='9.84099' y='0.409010366' width='1.5' height='6' rx='0.75'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" />
        and then Add to homescreen.
      </InstallPopup>
    )
  }
}

export default AddToHomescreen
