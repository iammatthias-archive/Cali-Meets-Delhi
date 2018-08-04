import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media screen and (min-width: ${props =>
      props.theme.responsive.small}) and (min-height: 450px) {
    margin: 0;
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
