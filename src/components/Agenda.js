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
    <Wrapper
      py={[4, 5]}
      px={[4, 5, 5, 6, 7]}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {props.events.map((event, index) => (
        <Box
          p={3}
          width={[1, 1 / 2]}
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
