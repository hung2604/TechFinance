import { LoanService } from '../../services/loan.service'

export default defineEventHandler(async () => {
  try {
    const loans = await LoanService.getLoans()
    return loans
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message
    })
  }
}) 