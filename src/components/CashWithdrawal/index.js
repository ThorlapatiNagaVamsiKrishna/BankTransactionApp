import {Component} from 'react'
import TransactionUpdation from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {balanceAmount: 2000}

  onChangeBankBalance = (id, eachTransaction) => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - eachTransaction.value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balanceAmount} = this.state
    return (
      <div className="cash-Withdraw-container">
        <div className="user-details-container">
          <h1 className="user-surname-logo">S</h1>
          <h1 className="user-name-heading">Sarah Williams</h1>
        </div>
        <div className="user-bank-balance-container">
          <p className="balance-enquiry-container">Your Balance</p>
          <div className="user-balance-amount-container">
            <p className="user-name-heading">{balanceAmount}</p>
            <p className="balance-enquiry-container">In Rupees</p>
          </div>
        </div>
        <p className="Withdraw-heading">Withdraw</p>
        <p className="balance-enquiry-container">CHOOSE SUM (IN RUPEES)</p>
        <ul className="balance-updation-container">
          {denominationsList.map(eachTransaction => (
            <TransactionUpdation
              eachTransaction={eachTransaction}
              onChangeBankBalance={this.onChangeBankBalance}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
