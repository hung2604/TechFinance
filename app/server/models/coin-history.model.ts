import mongoose from 'mongoose'

const coinHistorySchema = new mongoose.Schema({
  purchaseDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  coinValue: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Middleware để tự động cập nhật updatedAt
coinHistorySchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export const CoinHistory = mongoose.model('CoinHistory', coinHistorySchema)

export type TCoinHistory = {
  _id?: string
  purchaseDate: Date
  quantity: number
  amount: number
  coinValue: number
  createdAt?: Date
  updatedAt?: Date
} 