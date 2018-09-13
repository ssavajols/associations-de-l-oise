import React from 'react'

export class FormSpree extends React.PureComponent {
  render() {
    const { account } = this.props
    return (
      <form method="POST" action={`https://formspree.io/${account}`}>
        {this.props.children}
      </form>
    )
  }
}
