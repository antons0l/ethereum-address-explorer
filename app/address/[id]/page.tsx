'use client'

import { useParams } from 'next/navigation';
import Transactions from '../../../components/Transactions';
import Overview from '../../../components/Overview';

const EthAddrInfo = () => {
  const params = useParams();
  const address = params["id"] as string;
  
  return (
    <section className="max-container padding-container flex flex-col pb-32 py-5">
      <>
        <Overview address={address}/>
        <Transactions address={address}/>
      </>
    </section>
  )
}

export default EthAddrInfo