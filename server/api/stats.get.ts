import { defineEventHandler } from 'h3'
import { Kickstarter } from '../models/Kickstarter'
import { CoinHistory } from '../models/CoinHistory'
import { Loan } from '../models/Loan'

export default defineEventHandler(async (event) => {
  try {
    // Get current month and previous month
    const now = new Date()
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)

    // Get current MX price from MEXC API
    interface MexcPriceResponse {
      symbol: string
      price: string
    }
    const mxPrice = await $fetch<MexcPriceResponse>('https://api.mexc.com/api/v3/ticker/price?symbol=MXUSDT')
    const currentMxPrice = parseFloat(mxPrice.price)

    // Calculate total investment from coins
    const currentCoins = await CoinHistory.find({
      createdAt: { $gte: currentMonth }
    })
    const previousCoins = await CoinHistory.find({
      createdAt: { $gte: previousMonth, $lt: currentMonth }
    })

    // Calculate total investment and current value
    const totalInvestment = currentCoins.reduce((sum: number, coin) => sum + coin.amount, 0)
    const totalCoins = currentCoins.reduce((sum: number, coin) => sum + coin.quantity, 0)
    const currentValue = totalCoins * currentMxPrice

    const previousInvestment = previousCoins.reduce((sum: number, coin) => sum + coin.amount, 0)
    const previousCoinsTotal = previousCoins.reduce((sum: number, coin) => sum + coin.quantity, 0)
    const previousValue = previousCoinsTotal * currentMxPrice

    const investmentChange = previousInvestment > 0 
      ? ((currentValue - previousValue) / previousValue) * 100 
      : 0

    // Calculate total rewards from kickstarter
    const currentRewards = await Kickstarter.find({
      createdAt: { $gte: currentMonth },
      claimed: true
    })
    const previousRewards = await Kickstarter.find({
      createdAt: { $gte: previousMonth, $lt: currentMonth },
      claimed: true
    })
    const totalRewards = currentRewards.reduce((sum: number, reward) => sum + reward.reward, 0)
    const previousRewardsTotal = previousRewards.reduce((sum: number, reward) => sum + reward.reward, 0)
    const rewardsChange = previousRewardsTotal > 0
      ? ((totalRewards - previousRewardsTotal) / previousRewardsTotal) * 100
      : 0

    // Calculate total loans
    const currentLoans = await Loan.find({
      createdAt: { $gte: currentMonth }
    })
    const previousLoans = await Loan.find({
      createdAt: { $gte: previousMonth, $lt: currentMonth }
    })
    const totalLoans = currentLoans.reduce((sum: number, loan) => sum + loan.amountVND, 0)
    const previousLoansTotal = previousLoans.reduce((sum: number, loan) => sum + loan.amountVND, 0)
    const loansChange = previousLoansTotal > 0
      ? ((totalLoans - previousLoansTotal) / previousLoansTotal) * 100
      : 0

    // Calculate net profit (total investment - current value + total rewards)
    const netProfit = currentValue - totalInvestment + totalRewards
    const previousNetProfit = previousInvestment - previousValue + previousRewardsTotal
    const profitChange = previousNetProfit > 0
      ? ((netProfit - previousNetProfit) / previousNetProfit) * 100
      : 0

    // Get chart data for last 30 days
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    const dailyData = []
    const labels = []

    for (let i = 0; i < 30; i++) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const startOfDay = new Date(date.setHours(0, 0, 0, 0))
      const endOfDay = new Date(date.setHours(23, 59, 59, 999))

      const dayCoins = await CoinHistory.find({
        createdAt: { $gte: startOfDay, $lte: endOfDay }
      })
      const dayRewards = await Kickstarter.find({
        createdAt: { $gte: startOfDay, $lte: endOfDay },
        claimed: true
      })
      const dayLoans = await Loan.find({
        createdAt: { $gte: startOfDay, $lte: endOfDay }
      })

      const investment = dayCoins.reduce((sum: number, coin) => sum + coin.amount, 0)
      const rewards = dayRewards.reduce((sum: number, reward) => sum + reward.reward, 0)
      const loans = dayLoans.reduce((sum: number, loan) => sum + loan.amountVND, 0)

      dailyData.push({ investment, rewards, loans })
      labels.unshift(new Date(date).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short' }))
    }

    // Calculate distribution
    const kickstarterRewards = await Kickstarter.find({
      claimed: true
    })
    const coinInvestments = await CoinHistory.find()
    const loanAmounts = await Loan.find()

    const kickstarterTotal = kickstarterRewards.reduce((sum: number, reward) => sum + reward.reward, 0)
    const coinTotal = coinInvestments.reduce((sum: number, coin) => sum + coin.amount, 0)
    const loanTotal = loanAmounts.reduce((sum: number, loan) => sum + loan.amountVND, 0)

    return {
      totalInvestment,
      totalRewards,
      totalLoans,
      netProfit,
      investmentChange,
      rewardsChange,
      loansChange,
      profitChange,
      currentMxPrice,
      totalCoins,
      currentValue,
      chartData: {
        labels,
        investments: dailyData.map(d => d.investment),
        rewards: dailyData.map(d => d.rewards)
      },
      distribution: {
        kickstarter: kickstarterTotal,
        coin: coinTotal,
        loans: loanTotal
      }
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch dashboard statistics'
    })
  }
}) 