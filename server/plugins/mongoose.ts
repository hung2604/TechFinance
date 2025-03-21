import mongoose from 'mongoose'
import { defineNitroPlugin } from 'nitropack/runtime/plugin'

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig()
  
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(config.MONGODB_URI)
    console.log('Connected to MongoDB successfully')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}) 