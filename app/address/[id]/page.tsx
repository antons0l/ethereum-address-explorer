'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from "axios";
import Transactions from '../../../components/Transactions';
import { TransactionDetails } from '../../api/eth/transactions/route';
import Spinner from '../../../components/Spinner';
import Overview from '../../../components/Overview';

const EthAddrInfo = () => {
  const params = useParams();
  const address = params["id"] as string;
  const [balance, setBalance] = useState("0");
  const [transactions, setTransactions] = useState<TransactionDetails[]>([]);
  const [isBalanceLoading, setIsBalanceLoading] = useState(true);
  const [isTrxLoading, setIsTrxLoading] = useState(true);
  useEffect(() => {
    axios.get(`/api/eth/balance?address=${address}`).then(res => {
      if (res.data) setBalance(res.data);
      setIsBalanceLoading(false);
    });
  }, [address])

  useEffect(() => {
    axios.get(`/api/eth/transactions?address=${address}`).then(res => {
      setTransactions(res.data);
      setIsTrxLoading(false);
    });
  }, [address])


  return (
    <section className="max-container padding-container flex flex-col pb-32 py-5">
      <>
        {isBalanceLoading ? <Spinner /> : <Overview balance={balance}/>}
        {isTrxLoading ? <Spinner /> : <Transactions transactions={transactions}/>}
      </>
    </section>
  )
}

export default EthAddrInfo