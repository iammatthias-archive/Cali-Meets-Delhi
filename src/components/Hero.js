import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Plx from 'react-plx'

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  z-index: 0;
`

const BgImg = styled(Img)`
  @supports (object-fit: cover) {
    top: 0;
    left: 0;
    width: 100%;
    height: 95vh;
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      position: fixed;
    }
  }
`

const Logo = styled.div`
  z-index: 0;
  width: 60%;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-55%, -50%);
  max-width: 350px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
    max-width: 450px;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    width: 50%;
    max-width: 500px;
  }
`

const Hero = props => {
  return (
    <Wrapper className="hero">
      <Plx
        parallaxData={[
          {
            start: 1,
            duration: '.hero',
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: 'scale',
              },
            ],
          },
        ]}
      >
        <BgImg
          fluid={props.image.fluid}
          position={props.position}
          alt={props.image.description}
          title={props.image.title}
          backgroundColor={'#aaaea2'}
        />
      </Plx>
      {props.logo && (
        <Logo>
          <Img fluid={props.logo.fluid} alt={props.logo.description} />
        </Logo>
      )}
    </Wrapper>
  )
}

export default Hero
