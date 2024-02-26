'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from "axios";
import Transactions from '../../../components/Transactions';
import { TransactionDetails } from '../../api/eth/route';

const EthAddrInfo = () => {
  const params = useParams();
  const address = params["id"] as string;
  const [balance, setBalance] = useState("0");
  const [transactions, setTransactions] = useState<TransactionDetails[]>([]);
  useEffect(() => {
    axios.get(`/api/eth?address=${address}`).then(res => {
      if (res.data.ethBalance) setBalance(res.data.ethBalance)
      setTransactions(res.data.ethTransactions)
    });
  }, [address])


  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="relative z-20 flex flex-1 flex-col items-center">
        Balance {balance}
      </div>
      <Transactions transactions={transactions}/>
    </section>
  )
}

export default EthAddrInfo