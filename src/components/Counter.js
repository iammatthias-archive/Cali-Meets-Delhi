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
  padding: 10vh 0 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 25vh;
  }
`

const Intro = props => {
  return (
    <Wrapper>
      <Reveal>
        <Countdown date={`2018-11-20T12:00:00+05:30`} />
      </Reveal>
    </Wrapper>
  )
}

export default Intro
