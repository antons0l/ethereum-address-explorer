import { TransactionDetails } from "../app/api/eth/transactions/route"

type TransactionProps = {
  transaction: TransactionDetails
}

const Transaction = ({transaction}: TransactionProps) => {
  return (
    <div className="flex border-t border-gray-200">
      <div className="min-w-28 regular-14 w-1/5 pr-5 py-2 truncate" title={transaction.hash}>{transaction.hash}</div>
      <div className="min-w-28 regular-14 w-1/5 py-2">{transaction.blockNumber}</div>
      <div className="min-w-28 regular-14 w-1/5 pr-5 py-2 truncate" title={transaction.from}>{transaction.from}</div>
      <div className="min-w-28 regular-14 w-1/5 pr-5 py-2 truncate" title={transaction.to}>{transaction.to}</div>
      <div className="min-w-28 regular-14 w-1/5 py-2">{transaction.value}</div>
    </div>
  )
}

export default Transaction