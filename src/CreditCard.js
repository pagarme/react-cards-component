import React, { Component } from 'react'
import styles from './styles/main.scss'

class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
    if (!styles.hasOwnProperty(this.props.bank)) {
      throw new Error(`No styles for the Bank: ${this.props.bank}`)
    }
    if (!styles.hasOwnProperty(this.props.type)) {
      throw new Error(`No styles for the type: ${this.props.type}`)
    }
  }

  render() {
    const bank = this.props.bank
    const type = this.props.type

    return (
      <div className={`${styles.card} ${styles[bank]} ${styles[type]}`}>
        <div className={styles.front}>
          <figure className={styles.figure}>
            <img src="./assets/logos/nubank-white.png" className={styles.logo} />
          </figure>
          <div className={styles.chip}>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
          </div>
          <p className={styles.number}>4111111111111111</p>
          <div className={styles.date}>
            <span className={styles.expiration}>09/19</span>
          </div>
          <p className={styles.holderName}>FULANO DE TAL</p>
          <div className={styles.flag}>
            <div className={styles.globe}></div>
            <div className={styles.red}></div>
            <div className={styles.yellow}></div>
          </div>
        </div>
        <div className="back"></div>
      </div>
    )
  }
}

export default CreditCard
