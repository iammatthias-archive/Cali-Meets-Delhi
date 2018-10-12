import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Img from 'gatsby-image'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import '../styles/accordion.css'
import Wrapper from './Wrapper'

const Heading = styled(Img)`
  align-self: start;
  margin: 0 0 2rem;
  width: 50%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const EventTitle = styled.h3`
  color: ${props => props.theme.colors.black};
  padding: 1rem 0;
  &:hover {
    color: ${props => props.theme.colors.accent1};
  }
  transition: 0.5s ease;
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
        <Accordion>
          {props.events.map((event, index) => (
            <AccordionItem
              key={event.id}
              title={event.title}
              heading={event.heading}
              dateTime={event.dateTime}
              text={event.text}
            >
              <AccordionItemTitle className="u-position-relative">
                <EventTitle>
                  <div className="accordion__arrow" role="presentation" />
                  {event.title}
                </EventTitle>
              </AccordionItemTitle>
              <AccordionItemBody>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: event.text.childMarkdownRemark.html,
                  }}
                />
              </AccordionItemBody>
            </AccordionItem>
          ))}
        </Accordion>
      </Wrapper>
    </Reveal>
  )
}

export default Events
