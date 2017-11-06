import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import CreditCard from '../src/components/CreditCard'

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  render() {
    return (
      <div>
        <CreditCard
          bank="bradesco"
          brand="mastercard"
          number="4111111111111111"
          cvv="123"
          holderName="Fulano de Tal"
          expiration="12/19"
          type={this.props.type}
          flipped={this.state.flipped}
        />
        <br />
        <button onClick={() => {
          const flipped = !this.state.flipped
          this.setState({ flipped })
        }}>
          Flip the card
        </button>
      </div>
    )
  }
}

storiesOf('Bradesco', module)
  .add('Black', () => (
    <CardContainer type="black" />
  ))
