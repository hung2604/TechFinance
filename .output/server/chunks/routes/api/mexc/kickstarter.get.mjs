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
const kickstarter_get = defineEventHandler(async (event) => {
  try {
    if (!MEXC_API_KEY || !MEXC_API_SECRET) {
      throw new Error("MEXC API credentials are not configured");
    }
    const timestamp = Date.now().toString();
    const params = {
      coin: "USDT",
      limit: "50",
      recvWindow: "5000",
      timestamp
    };
    const signature = generateSignature(params, MEXC_API_SECRET);
    const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
    const url = `${MEXC_API_URL}/api/v3/capital/transfer/internal?${queryString}&signature=${signature}`;
    console.log("Request URL:", url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-mexc-apikey": MEXC_API_KEY,
        "Content-Type": "application/json"
      }
    });
    const responseText = await response.text();
    console.log("Response text:", responseText);
    if (!response.ok) {
      throw new Error(`MEXC API error: ${response.status} ${response.statusText}`);
    }
    let responseData;
    try {
      responseData = JSON.parse(responseText);
      return responseData;
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      throw new Error("Invalid JSON response from MEXC API");
    }
  } catch (error) {
    console.error("Error fetching MEXC internal transfers:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to fetch MEXC internal transfers"
    });
  }
});

export { kickstarter_get as default };
//# sourceMappingURL=kickstarter.get.mjs.map
