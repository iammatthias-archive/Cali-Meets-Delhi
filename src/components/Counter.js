import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Countdown from '../components/Countdown'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 20vh;
`

const Intro = props => {
  return (
    <Wrapper>
      <Reveal>
        <Countdown date={`2019-04-06T10:00:00-08:00`} />
      </Reveal>
    </Wrapper>
  )
}

export default Intro
