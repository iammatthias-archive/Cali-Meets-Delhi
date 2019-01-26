import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Box, Text } from 'rebass'

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
const Story = props => {
  return (
    <Wrapper p={[4, 5]}>
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
  )
}

export default Story
