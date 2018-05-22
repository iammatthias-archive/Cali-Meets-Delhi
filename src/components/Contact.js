import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import ContactForm from './ContactForm'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 100vh;
  }
`
const Heading = styled.div`
  max-width: 17rem;
  padding: 2rem;
  position: relative;
`

const Intro = props => {
  return (
    <Wrapper>
      <Reveal>
        <Heading>
          <Img
            sizes={props.sectionHead.sizes}
            alt={props.sectionHead.title}
            title={props.sectionHead.title}
          />
        </Heading>
        <ContactForm />
      </Reveal>
    </Wrapper>
  )
}

export default Intro
