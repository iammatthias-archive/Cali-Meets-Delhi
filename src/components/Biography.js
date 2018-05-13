import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`

const About = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    flex-direction: ${props => (props.switch ? 'row-reverse' : 'row')};
  }
`

const Profile = styled.div`
  border-radius: 2px;
  margin: 0 0 2rem 0;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 59%;
  }
`

const Details = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 38%;
  }
`

const Name = styled.h2`
  font-family: 'PT Serif', serif;
  font-weight: 600;
  display: inline-block;
  font-size: 1.25em;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`

const Text = styled.div`
  margin: 0 0 2rem 0;
  font-size: 1.1em;
  p {
    line-height: 1.5;
  }
`

const Biography = props => {
  return (
    <Wrapper>
      <Reveal>
        <About switch={props.switch}>
          <Profile>
            <Img
              sizes={props.image.sizes}
              alt={props.image.title}
              title={props.image.title}
              backgroundColor={'#aaaea2'}
              style={{ borderRadius: '2px' }}
            />
          </Profile>

          <Details>
            <Name>{props.name}</Name>
            <Text
              dangerouslySetInnerHTML={{
                __html: props.text.childMarkdownRemark.html,
              }}
            />
          </Details>
        </About>
      </Reveal>
    </Wrapper>
  )
}

export default Biography
