import { Loan } from '../models/Loan'
import { CoinHistory } from '../models/CoinHistory'

export const rewardDistributionService = {
  async distributeRewards(rewardAmount: number, distributionDate: Date) {
    try {
      // Get total MX coins owned
      const totalMXResult = await CoinHistory.aggregate([
        {
          $group: {
            _id: null,
            totalMX: { $sum: '$quantity' }
          }
        }
      ])

      const totalMX = totalMXResult[0]?.totalMX || 0

      if (totalMX === 0) {
        throw new Error('No MX coins found in the system')
      }

      // Calculate reward rate per MX
      const rewardRate = rewardAmount / totalMX

      // Find all loans with purchased MX
      const loans = await Loan.find({
        purchasedMX: { $gt: 0 }
      })

      // Distribute rewards to each loan
      for (const loan of loans) {
        const loanReward = loan.purchasedMX * rewardRate

        // Add to reward history
        const dateKey = distributionDate.toISOString().split('T')[0]
        loan.rewardHistory.set(dateKey, {
          amount: loanReward,
          totalMX: totalMX,
          rewardRate: rewardRate
        })

        // Update total rewards
        loan.totalRewards += loanReward

        await loan.save()
      }

      return {
        success: true,
        totalMX,
        rewardRate,
        distributedAmount: rewardAmount,
        affectedLoans: loans.length
      }
    } catch (error: any) {
      throw new Error(`Error distributing rewards: ${error.message}`)
    }
  }
} 