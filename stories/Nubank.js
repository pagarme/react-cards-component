import React from 'react'
import { storiesOf } from '@storybook/react'

import CreditCard from '../src/CreditCard'

storiesOf('Nubank', module)
  .add('Platinum', () => (
    <div>
      <CreditCard bank="nubank" type="platinum" />
    </div>
  ))
