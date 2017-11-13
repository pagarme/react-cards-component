import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import CreditCard from '../src/components/CreditCard'

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      flipped: false
    }
    this.handleFlip = this.handleFlip.bind(this)
  }
  
  handleFlip() {
    const flipped = !this.state.flipped
    this.setState({ flipped })
  }

  render() {
    return (
      <div>
        <CreditCard
          bank="default"
          brand="mastercard"
          number="4111111111111111"
          cvv="123"
          holderName="Fulano de Tal"
          expiration="12/19"
          flipped={this.state.flipped}
        />
        <br />
        <button onClick={this.handleFlip}>
          Flip the card
        </button>
      </div>
    )
  }
}

storiesOf('Default', module)
  .add('Normal', () => (
    <CardContainer />
  ))
