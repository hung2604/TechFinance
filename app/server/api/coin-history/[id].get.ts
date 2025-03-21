import { coinHistoryService } from '../../services/coin-history.service'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'ID không hợp lệ'
    })
  }

  try {
    const result = await coinHistoryService.getById(id)
    if (!result) {
      throw createError({
        statusCode: 404,
        message: 'Không tìm thấy bản ghi'
      })
    }
    return result
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Có lỗi xảy ra khi lấy thông tin lịch sử mua coin'
    })
  }
}) 