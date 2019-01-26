import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg2};
  &:nth-child(odd) {
    background: ${props => props.theme.colors.bg1};
  }
  position: relative;
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 5rem 2rem;
  padding-left: calc(env(safe-area-inset-left) + 2rem);
  padding-right: calc(env(safe-area-inset-right) + 2rem);
  padding-top: calc(env(safe-area-inset-top) + 2rem);
  padding-bottom: calc(env(safe-area-inset-bottom) + 2rem);
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100%;
  }
`
const Contact = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Contact
