import { ethers } from "ethers";
import axios from "axios";
import { NextRequest } from "next/server";
import { formatEthString } from "../../util/utils";

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address") || "";

  try {
    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);
    if (response.data.status === "1") {
      // Get balance in Wei
      const balanceWei: ethers.BigNumberish = response.data.result;
      // Convert balance from Wei to Ether
      const balanceEth: string = formatEthString(balanceWei);
      return Response.json(balanceEth);
    } else {
      console.error("Error fetching balance:", response.data.result);
      return Response.json(undefined);
    }
  } catch (error) {
    console.error("Error fetching balance:", error);
    return Response.json(undefined);
  }
}

