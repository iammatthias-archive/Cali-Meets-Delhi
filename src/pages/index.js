import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import Modules from '../components/Modules'
import Footer from '../components/Footer'

import Container from '../components/Container'
import { Element } from 'react-scroll'

class IndexPage extends React.Component {
  render() {
    const sections = this.props.data.allContentfulSection.edges
    return (
      <Layout>
        <Container>
          {sections.map(({ node: section }) => (
            <Element key={section.id} name={section.slug}>
              <Modules modules={section.modules} />
            </Element>
          ))}
        </Container>
        <Footer />
      </Layout>
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
                fluid(maxWidth: 1800) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              logo {
                title
                description
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
            ... on ContentfulIntro {
              title
              heading
              sectionHead {
                title
                description
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulGallery {
              title
              sectionHead {
                title
                description
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              images {
                title
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
            ... on ContentfulAgenda {
              title
              heading
              sectionHead {
                title
                description
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
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
            ... on ContentfulContact {
              title
              heading
              sectionHead {
                title
                description
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
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
