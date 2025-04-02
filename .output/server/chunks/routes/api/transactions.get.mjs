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

const transactions_get = defineEventHandler(async (event) => {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
    const kickstarterRewards = await Kickstarter.find({
      createdAt: { $gte: thirtyDaysAgo },
      claimed: true
    }).sort({ createdAt: -1 });
    const coinTransactions = await CoinHistory.find({
      createdAt: { $gte: thirtyDaysAgo }
    }).sort({ createdAt: -1 });
    const loanTransactions = await Loan.find({
      createdAt: { $gte: thirtyDaysAgo }
    }).sort({ createdAt: -1 });
    const transactions = [
      ...kickstarterRewards.map((reward) => {
        var _a;
        return {
          date: ((_a = reward.claimedAt) == null ? void 0 : _a.toISOString()) || reward.createdAt.toISOString(),
          type: "reward",
          description: `Ph\u1EA7n th\u01B0\u1EDFng ${reward.name}`,
          amount: reward.reward
        };
      }),
      ...coinTransactions.map((coin) => ({
        date: coin.createdAt.toISOString(),
        type: "investment",
        description: "Mua coin",
        amount: -coin.amount
      })),
      ...loanTransactions.map((loan) => ({
        date: loan.createdAt.toISOString(),
        type: "loan",
        description: loan.description,
        amount: -loan.amountVND
      }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch transactions"
    });
  }
});

export { transactions_get as default };
//# sourceMappingURL=transactions.get.mjs.map
