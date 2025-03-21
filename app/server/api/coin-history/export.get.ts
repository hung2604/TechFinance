import { coinHistoryService } from '../../services/coin-history.service'
import * as XLSX from 'xlsx'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event)
  
  try {
    // Lấy tất cả dữ liệu (không phân trang)
    const result = await coinHistoryService.getAll(1, 1000000)
    const records = result.data

    // Định dạng dữ liệu cho Excel
    const data = records.map(record => ({
      'Ngày mua': new Date(record.purchaseDate).toLocaleDateString('vi-VN'),
      'Số lượng': record.quantity,
      'Số tiền': record.amount,
      'Giá trị 1 coin': record.coinValue,
      'Ngày tạo': new Date(record.createdAt).toLocaleDateString('vi-VN')
    }))

    // Tạo workbook và worksheet
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)

    // Thêm worksheet vào workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Lịch sử mua coin')

    // Xuất file
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })

    // Set headers
    setHeader(event, 'Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    setHeader(event, 'Content-Disposition', `attachment; filename="lich-su-mua-coin-${new Date().toISOString().split('T')[0]}.xlsx"`)

    return buf
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Có lỗi xảy ra khi xuất file Excel'
    })
  }
}) 