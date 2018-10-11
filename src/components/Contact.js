import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import ContactForm from './ContactForm'
import Wrapper from './Wrapper'

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
const Text = styled.div`
  color: ${props => props.theme.colors.black};
  p {
    color: ${props => props.theme.colors.black};
    padding: 0.5rem 0;
  }
  em,
  strong {
    color: ${props => props.theme.colors.black};
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
        <Text
          dangerouslySetInnerHTML={{
            __html: props.text.childMarkdownRemark.html,
          }}
        />
        <ContactForm />
      </Wrapper>
    </Reveal>
  )
}

export default Contact
