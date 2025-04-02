import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import crypto from 'crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';

const MEXC_API_KEY = process.env.MEXC_API_KEY;
const MEXC_API_SECRET = process.env.MEXC_API_SECRET;
const MEXC_API_URL = "https://api.mexc.com";
function generateSignature(params, secret) {
  const sortedParams = Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join("&");
  return crypto.createHmac("sha256", secret).update(sortedParams).digest("hex");
}
const transactions_get = defineEventHandler(async (event) => {
  try {
    const timestamp = Date.now().toString();
    const endTime = Date.now();
    const startTime = endTime - 80 * 24 * 60 * 60 * 1e3;
    const params = {
      endTime: endTime.toString(),
      limit: "50",
      startTime: startTime.toString(),
      symbol: "BTCUSDT",
      timestamp
    };
    const signature = generateSignature(params, MEXC_API_SECRET);
    const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
    const response = await fetch(`${MEXC_API_URL}/api/v3/myTrades?${queryString}&signature=${signature}`, {
      method: "GET",
      headers: {
        "x-mexc-apikey": MEXC_API_KEY,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`MEXC API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((trade) => ({
      type: trade.isBuyer ? "buy" : "sell",
      symbol: trade.symbol,
      amount: parseFloat(trade.qty),
      price: parseFloat(trade.price),
      total: parseFloat(trade.quoteQty),
      time: new Date(trade.time)
    }));
  } catch (error) {
    console.error("Error fetching MEXC transactions:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to fetch MEXC transactions"
    });
  }
});

export { transactions_get as default };
//# sourceMappingURL=transactions.get.mjs.map
