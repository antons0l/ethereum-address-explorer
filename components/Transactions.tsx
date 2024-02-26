import { TransactionDetails } from "../app/api/eth/route";
import Transaction from "./Transaction";

type TransactionsProps = {
  transactions: TransactionDetails[];
}

const Transactions = ({transactions}: TransactionsProps) => {
  return (
    <div className="flex flex-col overflow-x-auto">
      {/* Header */}
      <div className="flex mb-2">
        <div className="w-1/5 px-4 py-2 font-bold">Transaction Hash</div>
        <div className="w-1/5 px-4 py-2 font-bold">Block</div>
        <div className="w-1/5 px-4 py-2 font-bold">From</div>
        <div className="w-1/5 px-4 py-2 font-bold">To</div>
        <div className="w-1/5 px-4 py-2 font-bold">Value</div>
      </div>
      {/* Rows */}
      {transactions.map((transaction, index) => (
        <Transaction key={index} transaction={transaction} />
      ))}
    </div>
  )
}

export default Transactions