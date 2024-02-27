'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from "axios";
import Transactions from '../../../components/Transactions';
import { TransactionDetails } from '../../api/eth/route';
import Spinner from '../../../components/Spinner';
import Overview from '../../../components/Overview';

const EthAddrInfo = () => {
  const params = useParams();
  const address = params["id"] as string;
  const [balance, setBalance] = useState("0");
  const [transactions, setTransactions] = useState<TransactionDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`/api/eth?address=${address}`).then(res => {
      if (res.data.ethBalance) setBalance(res.data.ethBalance);
      setTransactions(res.data.ethTransactions);
      setIsLoading(false);
    });
  }, [address])


  return (
    <section className="max-container padding-container flex flex-col pb-32 py-5">
      {isLoading ? <Spinner /> :
      <>
        <Overview balance={balance}/>
        <Transactions transactions={transactions}/>
      </>
  }
    </section>
  )
}

export default EthAddrInfo