import { ethers } from "ethers";
import axios from "axios";
import { NextRequest } from "next/server";

export type TransactionDetails = {
  hash: string;
  blockNumber: string;
  from: string;
  to: string;
  value: string;
};

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address") || "";

  const [ethBalance, ethTransactions] = await Promise.all([
    getEthBalance(address),
    getTransactions(address)
  ]);

  return Response.json({ ethBalance, ethTransactions });
}

function formatEthString(value: ethers.BigNumberish) {
  const numValueStr = ethers.formatEther(value);
  return Number(numValueStr).toFixed(5) + " ETH";
}

// Function to get the balance of an Ethereum address
async function getEthBalance(address: string): Promise<string | undefined> {
  try {
    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);
    if (response.data.status === "1") {
      // Get balance in Wei
      const balanceWei: ethers.BigNumberish = response.data.result;
      // Convert balance from Wei to Ether
      const balanceEth: string = formatEthString(balanceWei);
      return balanceEth;
    } else {
      console.error("Error fetching balance:", response.data.result);
      return undefined;
    }
  } catch (error) {
    console.error("Error fetching balance:", error);
    return undefined;
  }
}

async function getTransactions(address: string): Promise<TransactionDetails[]> {
  // For this task, it will fetch 50 recent transactions only (no pagination)
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&page=1&offset=50&apikey=${process.env.ETHERSCAN_API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "1") {
      const res: TransactionDetails[] = response.data.result;
      return res.map((trx: TransactionDetails) => {
        return { ...trx, value: formatEthString(trx.value) };
      });
    } else {
      console.error("Error fetching transactions:", response.data.result);
      return [];
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}
