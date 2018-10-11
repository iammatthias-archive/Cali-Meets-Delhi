import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  min-height: 85vh;
  width: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 5vh calc(env(safe-area-inset-right) + 2rem) 5vh
    calc(env(safe-area-inset-left) + 2rem);
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`
const Heading = styled(Img)`
  align-self: start;
  margin: 2rem;
  width: 50%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`
const CardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
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
const EventTitle = styled.h3`
  color: ${props => props.theme.colors.black};
  padding: 1rem 1rem 1rem 0;
`
const Text = styled.div`
  color: ${props => props.theme.colors.black};
  p {
    color: ${props => props.theme.colors.black};
    padding: 0.5rem 0;
  }
  em,
  strong {
    color: ${props => props.theme.colors.black};
  }
`

const Events = props => {
  return (
    <Reveal>
      <Wrapper>
        <Heading
          fluid={props.sectionHead.fluid}
          alt={props.sectionHead.title}
          title={props.sectionHead.title}
        />
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
      </Wrapper>
    </Reveal>
  )
}

export default Events
