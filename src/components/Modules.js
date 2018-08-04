import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Agenda from './Agenda'
import Registry from './Registry'
import Contact from './Contact'
import Counter from './Counter'

const Modules = props => {
  return (
    <ul>
      {props.modules.map((module, index) => (
        <li key={index}>
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
          {module.__typename === 'ContentfulAgenda' && (
            <div id="schedule">
              <Agenda
                heading={module.heading}
                events={module.events}
                sectionHead={module.sectionHead}
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
        </li>
      ))}
    </ul>
  )
}

export default Modules
