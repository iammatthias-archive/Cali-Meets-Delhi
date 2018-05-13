import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from './Hero'
import Intro from './Intro'
import Biography from './Biography'
import Body from './Body'
import Agenda from './Agenda'

const Modules = props => {
  return (
    <ul>
      {props.modules.map((module, index) => (
        <li key={index}>
          {module.__typename == 'ContentfulHero' && (
            <Hero
              logo={module.logo}
              image={module.image}
              links={module.links}
            />
          )}

          {module.__typename == 'ContentfulIntro' && (
            <div>
              <Intro heading={module.heading} text={module.text} />
            </div>
          )}

          {module.__typename == 'ContentfulBiography' && (
            <Biography
              name={module.name}
              image={module.image}
              text={module.text}
            />
          )}

          {module.__typename == 'ContentfulAgenda' && (
            <Agenda heading={module.heading} events={module.events} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Modules
