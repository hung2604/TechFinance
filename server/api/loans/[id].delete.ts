import { LoanService } from '../../services/loan.service'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Loan ID is required'
      })
    }

    await LoanService.deleteLoan(id)
    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error deleting loan'
    })
  }
}) 