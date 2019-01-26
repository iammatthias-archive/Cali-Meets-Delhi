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
import { Box, Heading as Header, Text } from 'rebass'

const Wrapper = styled(Box)`
  position: relative;
  background: var(--color-secondary);
`

const Heading = styled(Img)`
  align-self: start;
  margin: 0 0 2rem;
  height: 7em;
  img {
    object-fit: contain !important;
    object-position: left !important;
  }
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
              <Header>
                <div className="accordion__arrow" role="presentation" />
                {event.title}
              </Header>
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
