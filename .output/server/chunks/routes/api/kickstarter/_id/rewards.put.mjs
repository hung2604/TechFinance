import { d as defineEventHandler, a as getRouterParam, r as readBody, c as createError } from '../../../../nitro/nitro.mjs';
import { K as Kickstarter } from '../../../../_/Kickstarter.mjs';
import { L as Loan } from '../../../../_/Loan.mjs';
import { C as CoinHistory } from '../../../../_/CoinHistory.mjs';
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

const rewardDistributionService = {
  async distributeRewards(rewardAmount, distributionDate) {
    var _a;
    try {
      const totalMXResult = await CoinHistory.aggregate([
        {
          $group: {
            _id: null,
            totalMX: { $sum: "$quantity" }
          }
        }
      ]);
      const totalMX = ((_a = totalMXResult[0]) == null ? void 0 : _a.totalMX) || 0;
      if (totalMX === 0) {
        throw new Error("No MX coins found in the system");
      }
      const rewardRate = rewardAmount / totalMX;
      const loans = await Loan.find({
        purchasedMX: { $gt: 0 }
      });
      for (const loan of loans) {
        const loanReward = loan.purchasedMX * rewardRate;
        const dateKey = distributionDate.toISOString().split("T")[0];
        loan.rewardHistory.set(dateKey, {
          amount: loanReward,
          totalMX,
          rewardRate
        });
        loan.totalRewards += loanReward;
        await loan.save();
      }
      return {
        success: true,
        totalMX,
        rewardRate,
        distributedAmount: rewardAmount,
        affectedLoans: loans.length
      };
    } catch (error) {
      throw new Error(`Error distributing rewards: ${error.message}`);
    }
  }
};

const rewards_put = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const { reward, claimed } = await readBody(event);
    const project = await Kickstarter.findOne({ projectId: id });
    if (!project) {
      throw createError({
        statusCode: 404,
        message: "Project not found"
      });
    }
    if (reward && project.reward !== reward) {
      if (reward > 0) {
        await rewardDistributionService.distributeRewards(
          reward,
          /* @__PURE__ */ new Date()
        );
      }
    }
    project.reward = reward;
    project.claimed = claimed;
    if (claimed) {
      project.claimedAt = /* @__PURE__ */ new Date();
    }
    await project.save();
    return {
      success: true,
      message: "Reward updated successfully"
    };
  } catch (error) {
    console.error("Error updating reward:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error updating reward"
    });
  }
});

export { rewards_put as default };
//# sourceMappingURL=rewards.put.mjs.map
