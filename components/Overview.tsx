import Image from "next/image";
import { Loader } from "./Loader";

type OverviewProps = {
  balance: string;
  isLoading: boolean;
};
const Overview = ({ balance, isLoading }: OverviewProps) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-4 m-4 max-w-sm">
      <p className="bold-16 pb-5">Overview</p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <p className="regular-14">ETH BALANCE</p>
          </div>
          <div className="flex items-center">
            <Image src="/ethereum-icon.svg" alt="logo" width={10} height={10} />
            <p className="regular-14 px-1">{balance}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Overview;
