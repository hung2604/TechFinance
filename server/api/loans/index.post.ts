import { LoanService } from '../../services/loan.service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const loan = await LoanService.createLoan(body)
    return loan
  } catch (error: any) {
    throw createError({
      statusCode: error.message.includes('not found') ? 404 : 500,
      message: error.message
    })
  }
}) 