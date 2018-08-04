import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Countdown from '../components/Countdown'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg1};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 20vh;
  padding: 10vh 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 25vh;
  }
`

const currentDate = new Date()
const year =
  currentDate.getMonth() === 11 && currentDate.getDate() > 23
    ? currentDate.getFullYear() + 1
    : currentDate.getFullYear()

const Intro = props => {
  return (
    <Wrapper>
      <Reveal>
        <Countdown date={`${year}-11-20T00:00:00`} />
      </Reveal>
    </Wrapper>
  )
}

export default Intro
