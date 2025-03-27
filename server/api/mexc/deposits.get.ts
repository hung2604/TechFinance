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
    if (!MEXC_API_KEY || !MEXC_API_SECRET) {
      throw new Error('MEXC API credentials are not configured')
    }

    const timestamp = Date.now().toString()
    const params = {
      limit: '50',
      recvWindow: '5000',
      timestamp
    }

    const signature = generateSignature(params, MEXC_API_SECRET)
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
    
    const url = `${MEXC_API_URL}/api/v3/capital/deposit/hisrec?${queryString}&signature=${signature}`
    console.log('Request URL:', url)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-mexc-apikey': MEXC_API_KEY,
        'Content-Type': 'application/json'
      }
    })

    const responseText = await response.text()

    if (!response.ok) {
      throw new Error(`MEXC API error: ${response.status} ${response.statusText}`)
    }

    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch (e) {
      console.error('Failed to parse JSON:', e)
      throw new Error('Invalid JSON response from MEXC API')
    }

    return responseData.map((deposit: any) => ({
      id: deposit.id,
      coin: deposit.coin,
      amount: parseFloat(deposit.amount),
      network: deposit.network,
      status: deposit.status,
      address: deposit.address,
      txId: deposit.txId,
      time: new Date(deposit.insertTime)
    }))
  } catch (error: any) {
    console.error('Error fetching MEXC deposits:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch MEXC deposits'
    })
  }
}) 