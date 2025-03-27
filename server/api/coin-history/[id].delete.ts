import { coinHistoryService } from '../../services/coin-history.service'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw new Error('ID is required')
    }

    const result = await coinHistoryService.delete(id)
    
    if (!result) {
      throw createError({
        statusCode: 404,
        message: 'Record not found'
      })
    }

    return { message: 'Deleted successfully' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 400,
      message: error.message
    })
  }
}) 