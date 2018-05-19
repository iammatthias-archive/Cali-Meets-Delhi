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
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 100vh;
  }
`

const About = styled.div`
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Profile = styled.div`
  border-radius: 2px;
  position: relative;
  flex: 1 40%;
  max-width: 100%;
`

const Details = styled.div`
  flex: 1 40%;
  max-width: 100%;
  padding: 2rem;
`

const Heading = styled.div`
  max-width: 33rem;
  padding: 2rem;
  position: relative;
`

const Text = styled.div`
  width: 100%;
  position: relative;
`

const Biography = props => {
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
