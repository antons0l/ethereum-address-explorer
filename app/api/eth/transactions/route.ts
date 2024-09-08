import axios from "axios";
import { NextRequest } from "next/server";
import { formatEthString } from "../../util/utils";

export type TransactionDetails = {
  hash: string;
  blockNumber: string;
  from: string;
  to: string;
  value: string;
};


export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address") || "";

  // For this task, it will fetch 50 recent transactions only (no pagination)
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&page=1&offset=50&apikey=${process.env.ETHERSCAN_API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "1") {
      const res: TransactionDetails[] = response.data.result;
      const formattedResponse = res.map((trx: TransactionDetails) => {
        return { ...trx, value: formatEthString(trx.value) };
      });
      return Response.json(formattedResponse)
    } else {
      console.error("Error fetching transactions:", response.data.result);
      return Response.json([]);
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return Response.json([]);
  }
}


