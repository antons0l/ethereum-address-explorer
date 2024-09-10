import Image from "next/image";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import axios from "axios";

type OverviewProps = {
  address: string;
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Overview = ({ address }: OverviewProps) => {
  const [isBalanceLoading, setIsBalanceLoading] = useState(true);
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  const [balance, setBalance] = useState("0");
  const [ethPrice, setEthPrice] = useState("0");
  const usdBalance = (isBalanceLoading || isPriceLoading) ? "0" : formatter.format(Number(balance.replace("ETH", "")) * Number(ethPrice));
  useEffect(() => {
    axios.get(`/api/eth/balance?address=${address}`).then(res => {
      if (res.data) setBalance(res.data);
      setIsBalanceLoading(false);
    });
  }, [address]);
  useEffect(() => {
    axios.get(`/api/eth/price`).then(res => {
      if (res.data) setEthPrice(res.data);
      setIsPriceLoading(false);
    });
  }, [address]);
  return (
    <section className="bg-white rounded-lg shadow-md p-4 m-4 max-w-sm">
      <p className="bold-16 pb-5">Overview</p>
      {(isBalanceLoading && isPriceLoading) ? (
        <Loader />
      ) : (
        <>
          <div>
            <p className="regular-14 text-slate-500">ETH BALANCE</p>
          </div>
          <div className="flex items-center pb-5">
            <Image src="/ethereum-icon.svg" alt="logo" width={10} height={10} />
            <p className="regular-14 px-1">{balance}</p>
          </div>
          <div>
            <p className="regular-14 text-slate-500">ETH VALUE</p>
          </div>
          <div className="flex items-center">            
            <p className="regular-14 px-1">{`${usdBalance} (@ $${Number(ethPrice).toFixed(2)}/ETH)`}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Overview;
