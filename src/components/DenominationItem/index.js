import './index.css'

const TransactionUpdation = props => {
  const {eachTransaction, onChangeBankBalance} = props
  const {id, value} = eachTransaction

  const updateBankBalance = () => {
    onChangeBankBalance(id, eachTransaction)
  }

  return (
    <li className="transaction-update-container">
      <button
        type="button"
        className="transaction-update-button"
        onClick={updateBankBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default TransactionUpdation
