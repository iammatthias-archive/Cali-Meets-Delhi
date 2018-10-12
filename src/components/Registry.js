import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import Wrapper from './Wrapper'

const Heading = styled(Img)`
  align-self: start;
  margin: 0 0 2rem;
  width: 50%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`
const Zola = styled.div`
  padding: 0 2rem 2rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  height: 100%;
  iframe {
    max-width: 100%;
    height: 100vh;
  }
`

const Registry = props => {
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
