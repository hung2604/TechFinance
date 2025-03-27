import { User } from '../models/User'
import bcrypt from 'bcrypt'

class UserService {
  async getUsers() {
    return await User.find({}, {
      password: 0
    })
  }

  async getUserById(id: string) {
    return await User.findById(id, {
      password: 0
    })
  }

  async createUser(data: {
    name: string
    email: string
    password: string
    role: string
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    
    return await User.create({
      ...data,
      password: hashedPassword
    })
  }

  async updateUser(id: string, data: {
    name?: string
    email?: string
    password?: string
    role?: string
  }) {
    const updateData = { ...data }
    
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10)
    }

    return await User.findByIdAndUpdate(
      id,
      updateData,
      { 
        new: true,
        select: '-password'
      }
    )
  }

  async deleteUser(id: string) {
    return await User.findByIdAndDelete(id)
  }

  async validateCredentials(email: string, password: string) {
    const user = await User.findOne({ email })

    if (!user) {
      return null
    }

    const isValid = await user.comparePassword(password)
    if (!isValid) {
      return null
    }

    const { password: _, ...userWithoutPassword } = user.toObject()
    return userWithoutPassword
  }
}

export const userService = new UserService() 