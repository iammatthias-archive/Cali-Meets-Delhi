import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </div>
  )
}

export default Contact
