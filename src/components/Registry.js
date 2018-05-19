import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.paleYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  height: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`

const Heading = styled.h3`
  padding: 4rem 2rem 2rem;
  margin: 0 0 2rem 0;
  position: relative;
`

const Zola = styled.div`
  padding: 0rem 2rem 2rem;
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
  height: 100%;
  iframe {
    width: 100%;
    height: 100vh;
  }
`

const Registry = props => {
  return (
    <Wrapper>
      <Reveal>
        <Heading>{props.heading}</Heading>
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
