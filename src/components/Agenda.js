import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg1};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 85vh;
  padding: 10vh 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`
const CardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100vw;
  max-width: ${props => props.theme.sizes.maxWidth};
`
const Card = styled.li`
  flex: 1 100%;
  width: 100%;
  border-radius: 2px;
  transition: 0.3s;
  padding: 2rem;
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
  color: ${props => props.theme.colors.black}
  padding: 1rem 1rem 1rem 0;
`
const Date = styled.p`
  color: ${props => props.theme.colors.black}
  padding: 0.5rem 1rem;
`
const Text = styled.div`
  color: ${props => props.theme.colors.black}
  p {
    color: ${props => props.theme.colors.black}
    padding: 0.5rem 0;
  }
  em, strong {
    color: ${props => props.theme.colors.black}
  }
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
