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
      coin: 'USDT',
      limit: '50',
      recvWindow: '5000',
      timestamp
    }

    const signature = generateSignature(params, MEXC_API_SECRET)
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
    
    const url = `${MEXC_API_URL}/api/v3/capital/transfer/internal?${queryString}&signature=${signature}`
    console.log('Request URL:', url)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-mexc-apikey': MEXC_API_KEY,
        'Content-Type': 'application/json'
      }
    })

    const responseText = await response.text()
    console.log('Response text:', responseText)

    if (!response.ok) {
      throw new Error(`MEXC API error: ${response.status} ${response.statusText}`)
    }

    let responseData
    try {
      responseData = JSON.parse(responseText)
      return responseData
    } catch (e) {
      console.error('Failed to parse JSON:', e)
      throw new Error('Invalid JSON response from MEXC API')
    }
  } catch (error: any) {
    console.error('Error fetching MEXC internal transfers:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch MEXC internal transfers'
    })
  }
}) 