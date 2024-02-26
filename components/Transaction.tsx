import { TransactionDetails } from "../app/api/eth/route"

type TransactionProps = {
  transaction: TransactionDetails
}

const Transaction = ({transaction}: TransactionProps) => {
  return (
    <div className="flex border-t border-gray-200">
      <div className="w-1/5 px-4 py-2 truncate" title={transaction.hash}>{transaction.hash}</div>
      <div className="w-1/5 px-4 py-2">{transaction.blockNumber}</div>
      <div className="w-1/5 px-4 py-2 truncate" title={transaction.from}>{transaction.from}</div>
      <div className="w-1/5 px-4 py-2 truncate" title={transaction.to}>{transaction.to}</div>
      <div className="w-1/5 px-4 py-2">{transaction.value}</div>
    </div>
  )
}

export default Transaction