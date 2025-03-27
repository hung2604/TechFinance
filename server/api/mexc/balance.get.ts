import { H3Event } from 'h3'
import crypto from 'crypto'

const MEXC_API_KEY = process.env.MEXC_API_KEY
const MEXC_API_SECRET = process.env.MEXC_API_SECRET
const MEXC_API_URL = 'https://api.mexc.com'

function generateSignature(params: Record<string, string | number>, secret: string): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&')
  
  return crypto
    .createHmac('sha256', secret)
    .update(sortedParams)
    .digest('hex')
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    const timestamp = Date.now().toString()
    const params = {
      timestamp
    }

    const signature = generateSignature(params, MEXC_API_SECRET!)
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
    
    const response = await fetch(`${MEXC_API_URL}/api/v3/account?${queryString}&signature=${signature}`, {
      method: 'GET',
      headers: {
        'x-mexc-apikey': MEXC_API_KEY!,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`MEXC API error: ${response.statusText}`)
    }

    const data = await response.json()
    const usdtBalance = data.balances.find((balance: any) => balance.asset === 'USDT')
    
    return {
      total: parseFloat(usdtBalance?.total || '0'),
      available: parseFloat(usdtBalance?.free || '0'),
      frozen: parseFloat(usdtBalance?.locked || '0')
    }
  } catch (error: any) {
    console.error('Error fetching MEXC balance:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch MEXC balance'
    })
  }
}) 