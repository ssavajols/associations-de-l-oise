import React from 'react'

export class Counter extends React.PureComponent {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return (<div onClick={this.increment}>{this.state.count}</div>)
  }
}