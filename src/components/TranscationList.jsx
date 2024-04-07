import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TranscationList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
        <ul className="list">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction}/>
          ))}
          
        </ul>
    </div>
  )
}

export default TranscationList