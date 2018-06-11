import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg1};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  padding: 10vh 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`
const Heading = styled.div`
  max-width: 17rem;
  padding: 2rem;
  position: relative;
`

const Text = styled.div`
  padding: 2rem;
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
  position: relative;
  p {
    padding: 0.5rem 0;
  }
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
        <Text
          dangerouslySetInnerHTML={{
            __html: props.text.childMarkdownRemark.html,
          }}
        />
      </Reveal>
    </Wrapper>
  )
}

export default Intro
