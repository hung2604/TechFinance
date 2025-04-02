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
const balance_get = defineEventHandler(async (event) => {
  try {
    const timestamp = Date.now().toString();
    const params = {
      timestamp
    };
    const signature = generateSignature(params, MEXC_API_SECRET);
    const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
    const response = await fetch(`${MEXC_API_URL}/api/v3/account?${queryString}&signature=${signature}`, {
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
    const usdtBalance = data.balances.find((balance) => balance.asset === "USDT");
    return {
      total: parseFloat((usdtBalance == null ? void 0 : usdtBalance.total) || "0"),
      available: parseFloat((usdtBalance == null ? void 0 : usdtBalance.free) || "0"),
      frozen: parseFloat((usdtBalance == null ? void 0 : usdtBalance.locked) || "0")
    };
  } catch (error) {
    console.error("Error fetching MEXC balance:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to fetch MEXC balance"
    });
  }
});

export { balance_get as default };
//# sourceMappingURL=balance.get.mjs.map
