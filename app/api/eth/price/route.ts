import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);
    if (response.data.status === "1") {

      return Response.json(response.data.result.ethusd);
    } else {
      console.error("Error fetching price:", response.data.result);
      return Response.json(undefined);
    }
  } catch (error) {
    console.error("Error fetching price:", error);
    return Response.json(undefined);
  }
}

