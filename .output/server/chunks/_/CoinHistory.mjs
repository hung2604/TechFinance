import mongoose from 'mongoose';

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
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loan",
    default: null
  }
}, {
  timestamps: true
});
const CoinHistory = mongoose.model("CoinHistory", coinHistorySchema);

export { CoinHistory as C };
//# sourceMappingURL=CoinHistory.mjs.map
