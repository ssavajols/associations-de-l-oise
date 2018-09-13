import React from 'react'
import Link from 'gatsby-link'
import { PageCover } from '../components/page-cover'
import { ContactForm } from '../components/contact-form'

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <PageCover />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <ContactForm />
      </div>
    )
  }
}
