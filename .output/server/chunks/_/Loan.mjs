import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  amountVND: {
    type: Number,
    required: true,
    min: 0
  },
  amountUSDT: {
    type: Number,
    required: true,
    min: 0
  },
  remainingAmount: {
    type: Number,
    required: true,
    min: 0
  },
  usedAmount: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  purchasedMX: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  rewardHistory: {
    type: Map,
    of: {
      amount: {
        type: Number,
        required: true,
        min: 0
      },
      totalMX: {
        type: Number,
        required: true,
        min: 0
      },
      rewardRate: {
        type: Number,
        required: true,
        min: 0
      }
    },
    default: /* @__PURE__ */ new Map()
  },
  totalRewards: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  purchaseHistory: [{
    purchaseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CoinHistory"
    },
    amount: {
      type: Number,
      required: true
    },
    mxAmount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }],
  term: {
    type: String,
    required: true,
    enum: ["3_MONTHS", "6_MONTHS", "1_YEAR"]
  },
  interestRate: {
    type: Number,
    required: true,
    min: 0,
    max: 20
  },
  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  loanDate: {
    type: Date,
    required: true
  },
  interestStartDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"],
    default: "PENDING"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
loanSchema.pre("save", function(next) {
  this.updatedAt = /* @__PURE__ */ new Date();
  next();
});
loanSchema.virtual("remainingDays").get(function() {
  const today = /* @__PURE__ */ new Date();
  const termInDays = {
    "3_MONTHS": 90,
    "6_MONTHS": 180,
    "1_YEAR": 365
  };
  const endDate = new Date(this.interestStartDate);
  endDate.setDate(endDate.getDate() + termInDays[this.term]);
  return Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / (1e3 * 60 * 60 * 24)));
});
const Loan = mongoose.model("Loan", loanSchema);

export { Loan as L };
//# sourceMappingURL=Loan.mjs.map
