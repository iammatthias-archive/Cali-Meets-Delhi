import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import ContactForm from './ContactForm'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 15vw;
  margin: 2rem;
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const Intro = props => {
  return (
    <Reveal>
      <Wrapper>
        <Heading
          sizes={props.sectionHead.sizes}
          alt={props.sectionHead.title}
          title={props.sectionHead.title}
        />

        <ContactForm />
      </Wrapper>
    </Reveal>
  )
}

export default Intro
