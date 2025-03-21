import { coinHistoryService } from '../../services/coin-history.service'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw new Error('ID is required')
    }

    const body = await readBody(event)
    const result = await coinHistoryService.update(id, body)
    
    if (!result) {
      throw new Error('Record not found')
    }

    return result
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      message: error.message
    })
  }
}) 