import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg2};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  height: 100%;
  padding: 10vh 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`

const Heading = styled.div`
  max-width: 15rem;
  padding: 2rem;
  position: relative;
`

const Zola = styled.div`
  padding: 0 2rem 2rem;
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
