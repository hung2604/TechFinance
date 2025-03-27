import { CoinHistory } from '../models/CoinHistory'

export const coinHistoryService = {
  async create(data: any) {
    return await CoinHistory.create(data)
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