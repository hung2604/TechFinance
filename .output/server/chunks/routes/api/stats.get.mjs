import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { K as Kickstarter } from '../../_/Kickstarter.mjs';
import { C as CoinHistory } from '../../_/CoinHistory.mjs';
import { L as Loan } from '../../_/Loan.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';

const stats_get = defineEventHandler(async (event) => {
  try {
    const now = /* @__PURE__ */ new Date();
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const mxPrice = await $fetch("https://api.mexc.com/api/v3/ticker/price?symbol=MXUSDT");
    const currentMxPrice = parseFloat(mxPrice.price);
    const currentCoins = await CoinHistory.find({
      purchaseDate: { $gte: currentMonth }
    });
    const previousCoins = await CoinHistory.find({
      purchaseDate: { $gte: previousMonth, $lt: currentMonth }
    });
    const totalInvestment = currentCoins.reduce((sum, coin) => sum + coin.amount, 0);
    const totalCoins = currentCoins.reduce((sum, coin) => sum + coin.quantity, 0);
    const currentValue = totalCoins * currentMxPrice;
    const previousInvestment = previousCoins.reduce((sum, coin) => sum + coin.amount, 0);
    const previousCoinsTotal = previousCoins.reduce((sum, coin) => sum + coin.quantity, 0);
    const previousValue = previousCoinsTotal * currentMxPrice;
    const investmentChange = previousInvestment > 0 ? (currentValue - previousValue) / previousValue * 100 : 0;
    const currentRewards = await Kickstarter.find({
      createdAt: { $gte: currentMonth },
      claimed: true
    });
    const previousRewards = await Kickstarter.find({
      createdAt: { $gte: previousMonth, $lt: currentMonth },
      claimed: true
    });
    const totalRewards = currentRewards.reduce((sum, reward) => sum + reward.reward, 0);
    const previousRewardsTotal = previousRewards.reduce((sum, reward) => sum + reward.reward, 0);
    const rewardsChange = previousRewardsTotal > 0 ? (totalRewards - previousRewardsTotal) / previousRewardsTotal * 100 : 0;
    const currentLoans = await Loan.find({
      createdAt: { $gte: currentMonth }
    });
    const previousLoans = await Loan.find({
      createdAt: { $gte: previousMonth, $lt: currentMonth }
    });
    const totalLoans = currentLoans.reduce((sum, loan) => sum + loan.amountVND, 0);
    const previousLoansTotal = previousLoans.reduce((sum, loan) => sum + loan.amountVND, 0);
    const loansChange = previousLoansTotal > 0 ? (totalLoans - previousLoansTotal) / previousLoansTotal * 100 : 0;
    const netProfit = currentValue - totalInvestment + totalRewards;
    const previousNetProfit = previousInvestment - previousValue + previousRewardsTotal;
    const profitChange = previousNetProfit > 0 ? (netProfit - previousNetProfit) / previousNetProfit * 100 : 0;
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
    const dailyData = [];
    const labels = [];
    const allCoins = await CoinHistory.find({
      purchaseDate: { $gte: thirtyDaysAgo }
    }).sort({ purchaseDate: 1 });
    const allRewards = await Kickstarter.find({
      updatedAt: { $gte: thirtyDaysAgo },
      claimed: true
    }).sort({ updatedAt: 1 });
    let cumulativeCoins = 0;
    let cumulativeInvestment = 0;
    let cumulativeRewards = 0;
    const dates = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1e3);
      dates.push(date);
    }
    dates.forEach((date) => {
      const startOfDay = new Date(date.getTime());
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date.getTime());
      endOfDay.setHours(23, 59, 59, 999);
      const dayCoins = allCoins.filter(
        (coin) => coin.purchaseDate >= startOfDay && coin.purchaseDate <= endOfDay
      );
      dayCoins.forEach((coin) => {
        cumulativeCoins += coin.quantity;
        cumulativeInvestment += coin.amount;
      });
      const dayRewards = allRewards.filter(
        (reward) => reward.updatedAt >= startOfDay && reward.updatedAt <= endOfDay
      );
      dayRewards.forEach((reward) => {
        cumulativeRewards += reward.reward;
      });
      dailyData.push({
        coins: cumulativeCoins,
        investment: cumulativeInvestment,
        rewards: cumulativeRewards
      });
      labels.push(new Date(date).toLocaleDateString("vi-VN", { day: "numeric", month: "short" }));
    });
    const kickstarterRewards = await Kickstarter.find({
      claimed: true
    });
    const coinInvestments = await CoinHistory.find();
    const loanAmounts = await Loan.find();
    const kickstarterTotal = kickstarterRewards.reduce((sum, reward) => sum + reward.reward, 0);
    const coinTotal = coinInvestments.reduce((sum, coin) => sum + coin.amount, 0);
    const loanTotal = loanAmounts.reduce((sum, loan) => sum + loan.amountVND, 0);
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
        coins: dailyData.map((d) => d.coins),
        investments: dailyData.map((d) => d.investment),
        rewards: dailyData.map((d) => d.rewards)
      },
      distribution: {
        kickstarter: kickstarterTotal,
        coin: coinTotal,
        loans: loanTotal
      }
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch dashboard statistics"
    });
  }
});

export { stats_get as default };
//# sourceMappingURL=stats.get.mjs.map
