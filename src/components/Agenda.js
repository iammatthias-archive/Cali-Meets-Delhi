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
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
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

const Heading = styled.h1``
const EventTitle = styled.h3`
  padding: 1rem;
`
const Date = styled.p`
  padding: 1rem 1rem 0.25rem;
`
const Text = styled.p`
  padding: 0.25rem 1rem 1rem;
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
