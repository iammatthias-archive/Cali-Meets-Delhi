import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Img from 'gatsby-image'

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
  justify-content: space-between;
  padding: 2rem;
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
`
const Card = styled.li`
  flex: 1 40%;
  max-width: 100%;
  background: ${props => props.theme.colors.paleYellow};
  border-radius: 2px;
  transition: 0.3s;
  margin: 1rem;
  @media (hover: none) {
    transform: none !important;
  }
`
const Heading = styled.div`
  max-width: 18.5rem;
  padding: 2rem;
  position: relative;
`
const EventTitle = styled.h3`
  color: ${props => props.theme.colors.red}
  padding: 1rem;
`
const Date = styled.p`
  padding: 0.5rem 1rem;
`
const Text = styled.div`
  padding: 0.5rem 1rem 1rem;
`

const Agenda = props => {
  return (
    <Wrapper>
      <Reveal>
        <Heading>
          <Img
            sizes={props.sectionHead.sizes}
            alt={props.sectionHead.title}
            title={props.sectionHead.title}
          />
        </Heading>
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
