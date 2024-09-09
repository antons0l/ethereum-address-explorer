import { TransactionDetails } from "../app/api/eth/transactions/route";
import { Loader } from "./Loader";
import Transaction from "./Transaction";

type TransactionsProps = {
  transactions: TransactionDetails[];
  isLoading: boolean;
};

const COLUMN_NAMES = ["HASH", "BLOCK", "FROM", "TO", "VALUE"];

const Transactions = ({ transactions, isLoading }: TransactionsProps) => {
  return (
    <div className="flex flex-col overflow-x-auto bg-white rounded-lg shadow-md p-4 m-4">
      <p className="bold-16 pb-5">Transactions</p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <div className="flex mb-2">
            {COLUMN_NAMES.map((columnName, index) => (
              <div key={index} className="min-w-28 w-1/5 py-2 regular-14">
                {columnName}
              </div>
            ))}
          </div>
          {/* Rows */}
          {transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
        </>
      )}
    </div>
  );
};

export default Transactions;
