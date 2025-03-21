import { coinHistoryService } from '../../services/coin-history.service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const result = await coinHistoryService.create(body)
    return result
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      message: error.message
    })
  }
}) 