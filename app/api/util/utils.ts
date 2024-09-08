import { ethers } from "ethers";

export function formatEthString(value: ethers.BigNumberish) {
  const numValueStr = ethers.formatEther(value);
  return Number(numValueStr).toFixed(5) + " ETH";
}
