import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch' // Fetch Polyfill

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: ${props => props.theme.colors.bg2};
    color: ${props => props.theme.colors.black};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: ${props => props.theme.colors.black};
    }
    &::-moz-placeholder {
      color: ${props => props.theme.colors.black};
    }
    &:-ms-input-placeholder {
      color: ${props => props.theme.colors.black};
    }
    &:-moz-placeholder {
      color: ${props => props.theme.colors.black};
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  height: 4rem;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  height: 4rem;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 49%;
  }
`

const Message = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 8rem;
  resize: vertical;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.accent2} !important;
  color: ${props => props.theme.colors.bg2} !important;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem !important;
  height: 4rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 24.5%;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  width: 100vw;
  top: 50%;
  left: 50%;
  height: 120vh;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex: 1;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

const Button = styled.div`
  background: ${props => props.theme.colors.redAlt};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  height: 4rem;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 24.5%;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <Message
          name="message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />
        <Submit name="submit" type="submit" value="Send" />

        <Modal visible={this.state.showModal}>
          <h2>We'll be in touch!</h2>
          <Submit
            name="okay"
            type="submit"
            onClick={this.closeModal}
            value="Okay"
          />
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
