import { User } from '../models/User'
import type { IUser, IUserDocument } from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface AuthResponse {
  user: Omit<IUser, 'password'>
  token?: string
}

interface RegisterData {
  email: string
  password: string
}

class AuthService {
  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      // Tìm user theo email
      console.log('email', email)
      console.log('password', password)
      const user = await User.findByEmail(email)
      if (!user) {
        throw new Error('Email hoặc mật khẩu không chính xác')
      }

      // Kiểm tra mật khẩu
      const isValidPassword = await user.comparePassword(password)
      if (!isValidPassword) {
        throw new Error('Email hoặc mật khẩu không chính xác')
      }

      // Tạo JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '30d' }
      )

      // Trả về thông tin user (không bao gồm password) và token
      const { password: _, ...userWithoutPassword } = user.toObject()
      return {
        user: userWithoutPassword,
        token
      }
    } catch (error: any) {
      throw new Error(error.message || 'Có lỗi xảy ra trong quá trình đăng nhập')
    }
  }

  async register(email: string, password: string): Promise<AuthResponse> {
    try {
      // Kiểm tra email đã tồn tại
      const existingUser = await User.findByEmail(email)
      if (existingUser) {
        throw new Error('Email đã được sử dụng')
      }

      // Tạo user mới
      const user = await User.create({
        email: email.toLowerCase(),
        password
      })

      // Tạo JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      )

      // Trả về thông tin user (không bao gồm password) và token
      const { password: _, ...userWithoutPassword } = user.toObject()
      return {
        user: userWithoutPassword,
        token
      }
    } catch (error: any) {
      throw new Error(error.message || 'Có lỗi xảy ra trong quá trình đăng ký')
    }
  }
}

export const authService = new AuthService()
