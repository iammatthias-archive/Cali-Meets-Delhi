import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import { Box } from 'rebass'

const Wrapper = styled(Box)`
  position: relative;
  background: var(--color-base);
`

const Heading = styled(Img)`
  align-self: start;
  margin: 0 0 2rem;
  width: 50%;
  @media screen and (min-width: 52em) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`
const Zola = styled.div`
  height: 100%;
  iframe {
    max-width: 100%;
    height: 100vh;
  }
`

const Registry = props => {
  return (
    <Wrapper py={[4, 5]} px={[4, 5, 5, 6, 7]}>
      <Reveal>
        <Heading
          fluid={props.sectionHead.fluid}
          alt={props.sectionHead.title}
          title={props.sectionHead.title}
        />

        <Zola
          dangerouslySetInnerHTML={{
            __html: props.text.childMarkdownRemark.html,
          }}
        />
      </Reveal>
    </Wrapper>
  )
}

export default Registry
