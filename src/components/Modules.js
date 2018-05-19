import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from './Hero'
import Intro from './Intro'
import Customs from './Customs'
import Body from './Body'
import Agenda from './Agenda'
import Registry from './Registry'
import Contact from './Contact'

const Modules = props => {
  return (
    <ul>
      {props.modules.map((module, index) => (
        <li key={index}>
          {module.__typename == 'ContentfulHero' && (
            <div id="top">
              <Hero
                logo={module.logo}
                image={module.image}
                links={module.links}
              />
            </div>
          )}

          {module.__typename == 'ContentfulIntro' && (
            <div id="ourStory">
              <Intro
                heading={module.heading}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}

          {module.__typename == 'ContentfulCustoms' && (
            <div id="customs">
              <Customs
                name={module.name}
                image={module.image}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}

          {module.__typename == 'ContentfulAgenda' && (
            <div id="schedule">
              <Agenda
                heading={module.heading}
                events={module.events}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename == 'ContentfulRegistry' && (
            <div id="registry">
              <Registry
                heading={module.heading}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
          {module.__typename == 'ContentfulContact' && (
            <div id="contact">
              <Contact
                heading={module.heading}
                text={module.text}
                sectionHead={module.sectionHead}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Modules
