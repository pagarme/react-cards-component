import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/css/main.scss'
import logos from '../helpers/logos'

const CreditCard = (props) => {
  const {
    bank,
    number,
    cvv,
    expiration,
    holderName,
    brand,
    type,
    flipped,
  } = props

  const classNames = () => ([
    styles.card,
    styles[bank],
    styles[type],
    flipped ? styles.flipped : '',
  ]).join(' ')

  const formatCardNumberWithSpaces = (number) =>
    number.replace(/(\d{4})/g, '$1 ')

  return (
    <div className={styles.cardWrapper}>
      <div className={classNames()}>
        <div className={styles.front}>
          <div className={styles.logo}>
            <img
              alt={bank}
              src={logos[bank]}/>
          </div>
          <div className={styles.chip}>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
          </div>
          <div className={styles.number}>
            {formatCardNumberWithSpaces(number)}
          </div>
          <div className={styles.expiration}>
            {expiration}
          </div>
          <div className={styles.holderName}>
            {holderName}
          </div>
          <div className={`${styles.brand} ${styles[brand]}`}></div>
        </div>
        <div className={styles.back}>
          <div className={styles.cvv}>
            {cvv}
          </div>
        </div>
      </div>
    </div>
  )
}

CreditCard.propTypes = {
  bank: PropTypes.oneOf([
    'default',
    'nubank',
  ]),
  brand: PropTypes.oneOf([
    'mastercard',
    'visa',
    'hipercard'
  ]),
  type: PropTypes.string,
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
}

CreditCard.defaultProps = {
  bank: 'default',
  brand: 'mastercard',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
  flipped: false,
}

export default CreditCard
