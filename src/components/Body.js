import React from 'react'
import Reveal from 'react-reveal/Reveal'

const Body = props => {
  return (
    <Reveal>
      <div
        dangerouslySetInnerHTML={{
          __html: props.text.childMarkdownRemark.html,
        }}
      />
    </Reveal>
  )
}

export default Body
