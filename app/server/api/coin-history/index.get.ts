import { coinHistoryService } from '../../services/coin-history.service'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const result = await coinHistoryService.getAll(page, limit, query)
    return result
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      message: error.message
    })
  }
}) 