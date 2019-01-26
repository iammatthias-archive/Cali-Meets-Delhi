import React from 'react'
import styled from 'styled-components'
import Countdown from '../components/Countdown'

import { Flex } from 'rebass'

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 20vh;
  background: var(--color-base);
`

const Intro = props => {
  return (
    <Wrapper width={1} py={[4, 5]} px={[4, 5, 5, 6, 7]}>
      <Countdown date={`2019-04-06T10:00:00-08:00`} />
    </Wrapper>
  )
}

export default Intro
