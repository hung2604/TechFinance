import { defineEventHandler, readBody, createError } from 'h3'
import { authService } from '../../services/auth.service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate input
    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        message: 'Email và mật khẩu là bắt buộc'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Email không hợp lệ'
      })
    }

    // Validate password strength
    if (body.password.length < 6) {
      throw createError({
        statusCode: 400,
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
      })
    }

    // Xử lý đăng ký
    const result = await authService.register(body.email, body.password)
    return result

  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Đã có lỗi xảy ra'
    })
  }
}) 