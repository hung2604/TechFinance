import mongoose from 'mongoose'
import { defineNitroPlugin } from 'nitropack/runtime/plugin'

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig()

  try {
    // Kiểm tra nếu đã kết nối thì không kết nối lại
    if (mongoose.connection.readyState === 1) {
      return
    }

    mongoose.set('strictQuery', true)
    await mongoose.connect(config.MONGODB_URI)
    console.log('Connected to MongoDB successfully')
    console.log('MONGODB_URI:', process.env.NODE_ENV)

    // Đóng kết nối khi build xong
    if (process.env.NODE_ENV === 'prerender') {
      // Đóng kết nối sau 5 giây
      setTimeout(async () => {
        try {
          await mongoose.connection.close()
          console.log('MongoDB connection closed')
        } catch (error) {
          console.error('Error closing MongoDB connection:', error)
        }
      }, 30000)
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
})
