import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Modules from '../components/Modules'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Container from '../components/Container'
import { Element, scrollSpy, Events } from 'react-scroll'
import Reveal from 'react-reveal/Reveal'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  padding: 4rem 0 4rem 0;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 4em;
  }
`

class IndexPage extends React.Component {
  render() {
    const sections = this.props.data.allContentfulSection.edges
    const navigation = this.props.data.contentfulNavigation

    return (
      <div>
        <Menu />
        <Container>
          {sections.map(({ node: section }) => (
            <Element key={section.id} name={section.slug}>
              {section.heading && (
                <Reveal>
                  <Title>{section.heading}</Title>
                </Reveal>
              )}
              <Modules modules={section.modules} />
            </Element>
          ))}
        </Container>
        <Footer />
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query Index {
    allContentfulSection {
      edges {
        node {
          id
          title
          slug
          modules {
            __typename
            ... on ContentfulHero {
              title
              image {
                title
                sizes(maxWidth: 1800) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
              logo {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
            }
            ... on ContentfulIntro {
              title
              heading
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulBiography {
              title
              name
              image {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulAgenda {
              title
              heading
              events {
                __typename
                ... on ContentfulEvent {
                  id
                  title
                  heading
                  dateTime(formatString: "MMMM Do YYYY, h:mma")
                  text {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
