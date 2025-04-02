import { C as CoinHistory } from './CoinHistory.mjs';
import { L as Loan } from './Loan.mjs';

const coinHistoryService = {
  async create(data) {
    const newPurchase = await CoinHistory.create(data);
    const activeLoans = await Loan.find({
      remainingAmount: { $gt: 0 },
      loanDate: { $lte: new Date(data.purchaseDate) }
    }).sort({ loanDate: 1 });
    let remainingPurchaseAmount = data.amount;
    for (const loan of activeLoans) {
      if (remainingPurchaseAmount <= 0) break;
      const amountToUse = Math.min(loan.remainingAmount, remainingPurchaseAmount);
      const mxAmount = amountToUse / data.amount * data.quantity;
      loan.remainingAmount -= amountToUse;
      loan.usedAmount += amountToUse;
      loan.purchasedMX += mxAmount;
      remainingPurchaseAmount -= amountToUse;
      loan.purchaseHistory.push({
        purchaseId: newPurchase._id,
        amount: amountToUse,
        mxAmount,
        date: new Date(data.purchaseDate)
      });
      await loan.save();
      if (loan.remainingAmount === 0) {
        loan.status = "COMPLETED";
        await loan.save();
      }
    }
    return newPurchase;
  },
  async update(id, data) {
    return await CoinHistory.findByIdAndUpdate(id, data, { new: true });
  },
  async delete(id) {
    return await CoinHistory.findByIdAndDelete(id);
  },
  async getById(id) {
    return await CoinHistory.findById(id);
  },
  async getAll(page = 1, limit = 10, query = {}) {
    const skip = (page - 1) * limit;
    const filter = {};
    if (query.startDate || query.endDate) {
      filter.purchaseDate = {};
      if (query.startDate) {
        filter.purchaseDate.$gte = new Date(query.startDate);
      }
      if (query.endDate) {
        filter.purchaseDate.$lte = new Date(query.endDate);
      }
    }
    if (query.minAmount || query.maxAmount) {
      filter.amount = {};
      if (query.minAmount) {
        filter.amount.$gte = Number(query.minAmount);
      }
      if (query.maxAmount) {
        filter.amount.$lte = Number(query.maxAmount);
      }
    }
    const sort = {};
    if (query.sortBy) {
      sort[query.sortBy] = query.sortDirection === "desc" ? -1 : 1;
    } else {
      sort.createdAt = -1;
    }
    const [data, total] = await Promise.all([
      CoinHistory.find(filter).sort(sort).skip(skip).limit(limit),
      CoinHistory.countDocuments(filter)
    ]);
    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }
};

export { coinHistoryService as c };
//# sourceMappingURL=coin-history.service.mjs.map
