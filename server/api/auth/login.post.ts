import { defineEventHandler, readBody, createError, setCookie } from 'h3'
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

    // Xử lý đăng nhập
    const result = await authService.login(body.email, body.password)

    // Set cookie nếu user chọn "remember me"
    if (body.remember) {
      setCookie(event, 'token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      })
    }

    return result
    
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Đã có lỗi xảy ra'
    })
  }
}) 