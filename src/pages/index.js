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
              sectionHead {
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
            ... on ContentfulCustoms {
              title
              name
              sectionHead {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
              sectionHead {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
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
              sectionHead {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
              sectionHead {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
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
                      excerpt(pruneLength: 250)
                    }
                  }
                }
              }
            }
            ... on ContentfulRegistry {
              title
              heading
              sectionHead {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
              sectionHead {
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
            ... on ContentfulContact {
              title
              heading
              sectionHead {
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
          }
        }
      }
    }
  }
`

export default IndexPage
