import { coinHistoryService } from '../../services/coin-history.service'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw new Error('ID is required')
    }

    const result = await coinHistoryService.delete(id)
    
    if (!result) {
      throw new Error('Record not found')
    }

    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      message: error.message
    })
  }
}) 