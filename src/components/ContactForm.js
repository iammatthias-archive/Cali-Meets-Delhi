import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch'

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 2rem 0;
  input,
  textarea {
    max-width: ${props => props.theme.sizes.maxWidth};
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: ${props => props.theme.colors.purewhite};
    color: ${props => props.theme.colors.black};
    border-radius: 2px;
    padding: 1em;

    &:placeholder {
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
  label {
    display: none;
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
  width: 100%;
  color: ${props => props.theme.colors.bg2} !important;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem !important;
  height: 4rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background: ${props => props.theme.colors.accent1} !important;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 49%;
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
    fetch('/?no-cache=1', {
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
        <label htmlFor="name">Name</label>
        <Name
          id="name"
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <label htmlFor="email">Email</label>
        <Email
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <label htmlFor="message">Message</label>
        <Message
          id="message"
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
