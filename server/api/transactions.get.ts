import { defineEventHandler } from 'h3'
import { Kickstarter } from '../models/Kickstarter'
import { CoinHistory } from '../models/CoinHistory'
import { Loan } from '../models/Loan'

export default defineEventHandler(async (event) => {
  try {
    // Get transactions from last 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    // Get Kickstarter rewards
    const kickstarterRewards = await Kickstarter.find({
      createdAt: { $gte: thirtyDaysAgo },
      claimed: true
    }).sort({ createdAt: -1 })

    // Get Coin transactions
    const coinTransactions = await CoinHistory.find({
      createdAt: { $gte: thirtyDaysAgo }
    }).sort({ createdAt: -1 })

    // Get Loan transactions
    const loanTransactions = await Loan.find({
      createdAt: { $gte: thirtyDaysAgo }
    }).sort({ createdAt: -1 })

    // Combine and format all transactions
    const transactions = [
      ...kickstarterRewards.map(reward => ({
        date: reward.claimedAt?.toISOString() || reward.createdAt.toISOString(),
        type: 'reward' as const,
        description: `Phần thưởng ${reward.name}`,
        amount: reward.reward
      })),
      ...coinTransactions.map(coin => ({
        date: coin.createdAt.toISOString(),
        type: 'investment' as const,
        description: 'Mua coin',
        amount: -coin.amount
      })),
      ...loanTransactions.map(loan => ({
        date: loan.createdAt.toISOString(),
        type: 'loan' as const,
        description: loan.description,
        amount: -loan.amountVND
      }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return transactions
  } catch (error) {
    console.error('Error fetching transactions:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch transactions'
    })
  }
}) 