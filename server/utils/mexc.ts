import crypto from 'crypto'

const MEXC_API_KEY = process.env.MEXC_API_KEY
const MEXC_API_SECRET = process.env.MEXC_API_SECRET
const MEXC_API_URL = 'https://api.mexc.com'

export function generateSignature(params: Record<string, string | number>, secret: string): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&')
  
  return crypto
    .createHmac('sha256', secret)
    .update(sortedParams)
    .digest('hex')
}

async function fetchWithRetry(url: string, options: RequestInit, maxRetries = 3, timeout = 5000) {
  console.log(`[MEXC API] Starting request to ${url}`)
  const startTime = Date.now()

  for (let i = 0; i < maxRetries; i++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      console.log(`[MEXC API] Attempt ${i + 1}/${maxRetries}`)
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        // Thêm các headers để tránh bị chặn
        headers: {
          ...options.headers,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      })

      clearTimeout(timeoutId)
      const endTime = Date.now()
      console.log(`[MEXC API] Request completed in ${endTime - startTime}ms`)

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`[MEXC API] HTTP error! status: ${response.status}, body: ${errorText}`)
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)
      }

      return response
    } catch (error: any) {
      if (i === maxRetries - 1) throw error
      if (error.name === 'AbortError') {
        console.log(`[MEXC API] Request timeout, retrying... (${i + 1}/${maxRetries})`)
        continue
      }
      console.log(`[MEXC API] Request failed, retrying... (${i + 1}/${maxRetries})`)
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))) // Exponential backoff
    }
  }
}

export async function mexcRequest(endpoint: string, params: Record<string, string | number> = {}) {
  if (!MEXC_API_KEY || !MEXC_API_SECRET) {
    throw new Error('MEXC API credentials are not configured')
  }

  const timestamp = Date.now().toString()
  const requestParams = {
    ...params,
    timestamp
  }

  const signature = generateSignature(requestParams, MEXC_API_SECRET)
  const queryString = Object.entries(requestParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  
  const url = `${MEXC_API_URL}${endpoint}?${queryString}&signature=${signature}`
  console.log(`[MEXC API] Making request to ${endpoint}`)
  
  const response = await fetchWithRetry(url, {
    method: 'GET',
    headers: {
      'x-mexc-apikey': MEXC_API_KEY,
      'Content-Type': 'application/json'
    }
  })

  if (!response) {
    throw new Error('No response received from MEXC API')
  }

  const responseText = await response.text()
  let responseData

  try {
    responseData = JSON.parse(responseText)
  } catch (e) {
    console.error('[MEXC API] Failed to parse JSON:', e)
    throw new Error('Invalid JSON response from MEXC API')
  }

  return responseData
} 