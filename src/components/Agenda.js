import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 100vh;
  }
`
const CardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 2rem;
`
const Card = styled.li`
  flex: 1 40%;
  max-width: 100%;
  margin: 1em;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 2px;
  transition: 0.3s;
  @media (hover: none) {
    transform: none !important;
  }
`
const Info = styled.div`
  width: 100%;
  padding: 2rem;
`

const Heading = styled.h1`
  font-family: 'PT Serif', serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
  position: relative;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`
const EventTitle = styled.h2`
  padding: 1rem;
  font-size: 1.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
`
const Text = styled.div`
  padding: 1rem;
  font-size: 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
`
const Date = styled.p`
  white-space: nowrap;
  padding: 1rem;
  font-size: 0.75rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
`

const Agenda = props => {
  return (
    <Wrapper>
      <Reveal>
        <Info>
          <Heading>{props.heading}</Heading>
        </Info>
        <CardList>
          {props.events.map((event, index) => (
            <Card
              key={event.id}
              title={event.title}
              heading={event.heading}
              dateTime={event.dateTime}
              text={event.text}
            >
              <EventTitle>{event.title}</EventTitle>
              <Text>{event.heading}</Text>
              <Date>{event.dateTime}</Date>
              <Text
                dangerouslySetInnerHTML={{
                  __html: event.text.childMarkdownRemark.html,
                }}
              />
            </Card>
          ))}
        </CardList>
      </Reveal>
    </Wrapper>
  )
}

export default Agenda
