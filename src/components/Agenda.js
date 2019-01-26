import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Text } from 'rebass'

const Wrapper = styled(Flex)`
  position: relative;
  background: var(--color-secondary);
  text-align: center;
`

const Events = props => {
  return (
    <Wrapper p={[4, 5]} flexWrap="wrap">
      {props.events.map((event, index) => (
        <Box
          p={3}
          width={[1, 1 / 3]}
          key={event.id}
          title={event.title}
          heading={event.heading}
          dateTime={event.dateTime}
          text={event.text}
        >
          <Heading>{event.title}</Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: event.text.childMarkdownRemark.html,
            }}
          />
        </Box>
      ))}
    </Wrapper>
  )
}

export default Events
