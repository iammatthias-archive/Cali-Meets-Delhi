import styled from 'styled-components'
import React from 'react'
import Hero from './Hero'
import Story from './Story'
import Gallery from './Gallery'
import Contact from './Contact'
import Counter from './Counter'
import Registry from './Registry'
import Agenda from './Agenda'
import FAQ from './FAQ'

import { Box } from 'rebass'

const Item = styled(Box)`
  &:first-child {
    height: 95vh;
    z-index: 0 !important;
  }
  z-index: 10 !important;
`

const Modules = props => {
  return (
    <>
      {props.modules.map((module, index) => (
        <Item key={index}>
          {module.__typename === 'ContentfulHero' && (
            <div id="top">
              <Hero
                logo={module.logo}
                image={module.image}
                links={module.links}
              />
            </div>
          )}
          {module.__typename === 'ContentfulAgenda' && (
            <div id="events">
              <Counter />
              <Agenda
                heading={module.heading}
                events={module.events}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename === 'ContentfulIntro' && (
            <div id="ourStory">
              <Story
                heading={module.heading}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename === 'ContentfulFaq' && (
            <div id="faq">
              <FAQ
                heading={module.heading}
                events={module.events}
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
                itemsPerRow={[1, 2, 3]}
              />
            </div>
          )}
          {module.__typename === 'ContentfulRegistry' && (
            <div id="registry">
              <Registry
                heading={module.heading}
                text={module.text}
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
        </Item>
      ))}
    </>
  )
}

export default Modules
