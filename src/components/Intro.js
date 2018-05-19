import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 100vh;
  }
`

const Info = styled.div`
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 4rem 2rem 2rem;
`

const Heading = styled.h1`
  margin: 0 0 2rem 0;
  position: relative;
`

const Text = styled.div`
  position: relative;
`

const Intro = props => {
  return (
    <Wrapper>
      <Reveal>
        <Info>
          <Heading>{props.heading}</Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: props.text.childMarkdownRemark.html,
            }}
          />
        </Info>
      </Reveal>
    </Wrapper>
  )
}

export default Intro
