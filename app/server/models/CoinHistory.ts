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
  }
}, {
  timestamps: true
})

export const CoinHistory = mongoose.model('CoinHistory', coinHistorySchema) 