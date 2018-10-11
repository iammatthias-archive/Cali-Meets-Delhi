import styled from 'styled-components'
import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Gallery from './Gallery'
import Agenda from './Agenda'
import Contact from './Contact'
import Counter from './Counter'

const ListItem = styled.li`
  background: ${props => props.theme.colors.bg1};
  &:nth-child(odd) {
    background: ${props => props.theme.colors.bg2};
  }
`

const Modules = props => {
  return (
    <ul>
      {props.modules.map((module, index) => (
        <ListItem key={index}>
          {module.__typename === 'ContentfulHero' && (
            <div id="top">
              <Hero
                logo={module.logo}
                image={module.image}
                links={module.links}
              />
            </div>
          )}
          {module.__typename === 'ContentfulIntro' && (
            <div id="ourStory">
              <Counter />
              <Intro
                heading={module.heading}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename === 'ContentfulGallery' && (
            <div id="gallery">
              <Gallery
                heading={module.heading}
                photos={module.images}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename === 'ContentfulAgenda' && (
            <div id="events">
              <Agenda
                heading={module.heading}
                events={module.events}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename === 'ContentfulContact' && (
            <div id="contact">
              <Contact
                heading={module.heading}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
        </ListItem>
      ))}
    </ul>
  )
}

export default Modules
