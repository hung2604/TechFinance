import { defineEventHandler, readBody, createError } from 'h3'
import { authService } from '../../services/auth.service'

export default defineEventHandler(async (event) => {
  console.log('da vao day', event)
  try {
    const body = await readBody(event)

    // Validate input
    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        message: 'Email và mật khẩu là bắt buộc'
      })
    }
    console.log('da vao day1', event)

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Email không hợp lệ'
      })
    }
    console.log('da vao day2', event)

    // Validate password strength
    if (body.password.length < 6) {
      throw createError({
        statusCode: 400,
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
      })
    }
    console.log('da vao day3', event)

    // Xử lý đăng ký
    const result = await authService.register(body.email, body.password)
    console.log('da vao day4', event)
    return result

  } catch (error: any) {
    console.log('da vao da51', event)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Đã có lỗi xảy ra'
    })
  }
})
