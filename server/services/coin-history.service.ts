import { CoinHistory } from '../models/CoinHistory'
import { Loan } from '../models/Loan'

const VND_TO_USDT_RATE = 25000

export const coinHistoryService = {
  async create(data: any) {
    // Create new coin purchase record
    const newPurchase = await CoinHistory.create(data)

    // Find loans with remaining amount
    const activeLoans = await Loan.find({
      remainingAmount: { $gt: 0 },
      loanDate: { $lte: new Date(data.purchaseDate) }
    }).sort({ loanDate: 1 })

    let remainingPurchaseAmount = data.amount

    // Use loans to cover the purchase amount
    for (const loan of activeLoans) {
      if (remainingPurchaseAmount <= 0) break

      const amountToUse = Math.min(loan.remainingAmount, remainingPurchaseAmount)
      
      // Calculate MX amount based on the amount used from this loan
      const mxAmount = (amountToUse / data.amount) * data.quantity
      
      loan.remainingAmount -= amountToUse
      loan.usedAmount += amountToUse
      loan.purchasedMX += mxAmount
      remainingPurchaseAmount -= amountToUse

      // Add to purchase history
      loan.purchaseHistory.push({
        purchaseId: newPurchase._id,
        amount: amountToUse,
        mxAmount: mxAmount,
        date: new Date(data.purchaseDate)
      })

      // Update loan
      await loan.save()

      // If this loan was fully used, update its status
      if (loan.remainingAmount === 0) {
        loan.status = 'COMPLETED'
        await loan.save()
      }
    }

    return newPurchase
  },

  async update(id: string, data: any) {
    return await CoinHistory.findByIdAndUpdate(id, data, { new: true })
  },

  async delete(id: string) {
    return await CoinHistory.findByIdAndDelete(id)
  },

  async getById(id: string) {
    return await CoinHistory.findById(id)
  },

  async getAll(page: number = 1, limit: number = 10, query: any = {}) {
    const skip = (page - 1) * limit
    const filter: any = {}

    // Apply date filters
    if (query.startDate || query.endDate) {
      filter.purchaseDate = {}
      if (query.startDate) {
        filter.purchaseDate.$gte = new Date(query.startDate)
      }
      if (query.endDate) {
        filter.purchaseDate.$lte = new Date(query.endDate)
      }
    }

    // Apply amount filters
    if (query.minAmount || query.maxAmount) {
      filter.amount = {}
      if (query.minAmount) {
        filter.amount.$gte = Number(query.minAmount)
      }
      if (query.maxAmount) {
        filter.amount.$lte = Number(query.maxAmount)
      }
    }

    // Build sort options
    const sort: any = {}
    if (query.sortBy) {
      sort[query.sortBy] = query.sortDirection === 'desc' ? -1 : 1
    } else {
      sort.createdAt = -1 // Default sort by creation date desc
    }

    const [data, total] = await Promise.all([
      CoinHistory.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit),
      CoinHistory.countDocuments(filter)
    ])

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  }
} 