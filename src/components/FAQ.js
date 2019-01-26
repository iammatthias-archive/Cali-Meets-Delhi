import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import '../styles/accordion.css'
import { Box, Text } from 'rebass'

const Wrapper = styled(Box)`
  position: relative;
  background: var(--color-secondary);
`

const Heading = styled(Img)`
  align-self: start;
  margin: 0 0 1rem;
  width: 50%;
  @media screen and (min-width: 52em) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const EventTitle = styled.h3`
  color: var(--color-tertiary);
  padding: 1rem 0;
  margin: 0;
  &:hover {
    color: var(--color-accent);
  }
  transition: 0.5s ease;
`

const FAQ = props => {
  return (
    <Wrapper py={[4, 5]} px={[4, 5, 5, 6, 7]}>
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
  )
}

export default FAQ
