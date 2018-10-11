import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import ContactForm from './ContactForm'

const Wrapper = styled.div`
  position: relative;
  min-height: 85vh;
  width: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 5vh calc(env(safe-area-inset-right) + 2rem) 5vh
    calc(env(safe-area-inset-left) + 2rem);
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`
const Heading = styled(Img)`
  align-self: start;
  margin: 2rem;
  width: 50%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const Contact = props => {
  return (
    <Reveal>
      <Wrapper>
        <Heading
          fluid={props.sectionHead.fluid}
          alt={props.sectionHead.title}
          title={props.sectionHead.title}
        />

        <ContactForm />
      </Wrapper>
    </Reveal>
  )
}

export default Contact
