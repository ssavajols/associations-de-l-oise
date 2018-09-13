import React from 'react'
import { FormSpree } from './form-spree'

export class ContactForm extends React.PureComponent {
  render() {
    return (
      <FormSpree account="s.savajols@gmail.com">
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="one_field" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit">Send</button>
      </FormSpree>
    )
  }
}
