import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
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
  position: relative;
  p {
    padding: 0.5rem 0;
  }
`
const Intro = props => {
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
      </Wrapper>
    </Reveal>
  )
}

export default Intro
