import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { K as Kickstarter } from '../../../_/Kickstarter.mjs';
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

const MEXC_API_URL = "https://www.mexc.com/api/operateactivity/sun_shines/list";
async function syncKickstarterProjects() {
  try {
    console.log("Starting Kickstarter projects sync...");
    const response = await fetch(MEXC_API_URL);
    const data = await response.json();
    const projects = data.data.map((item) => {
      var _a;
      return {
        projectId: item.id.toString(),
        name: item.profitCurrency,
        description: item.international.projectIntroduction,
        startTime: new Date(item.startTime),
        endTime: new Date(item.endTime),
        status: getProjectStatus(item.startTime, item.endTime),
        rewards: ((_a = item.rewards) == null ? void 0 : _a.map((reward) => ({
          tier: reward.name,
          amount: reward.amount,
          description: reward.description,
          claimed: false
        }))) || []
      };
    });
    const existingProjects = await Kickstarter.find({}, { projectId: 1 });
    const existingProjectIds = new Set(existingProjects.map((p) => p.projectId));
    for (const project of projects) {
      if (existingProjectIds.has(project.projectId)) {
        await Kickstarter.findOneAndUpdate(
          { projectId: project.projectId },
          {
            $set: {
              name: project.name,
              description: project.description,
              startTime: project.startTime,
              endTime: project.endTime,
              status: project.status,
              updatedAt: /* @__PURE__ */ new Date()
            }
          }
        );
        console.log(`Updated project: ${project.projectId}`);
      } else {
        await Kickstarter.create(project);
        console.log(`Created new project: ${project.projectId}`);
      }
    }
    console.log("Kickstarter projects sync completed");
  } catch (error) {
    console.error("Error syncing Kickstarter projects:", error);
    throw error;
  }
}
function getProjectStatus(startTime, endTime) {
  const now = /* @__PURE__ */ new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);
  if (now < start) {
    return "upcoming";
  } else if (now > end) {
    return "ended";
  } else {
    return "ongoing";
  }
}
syncKickstarterProjects();

const sync_post = defineEventHandler(async (event) => {
  try {
    await syncKickstarterProjects();
    return {
      success: true,
      message: "Kickstarter projects sync completed"
    };
  } catch (error) {
    console.error("Error syncing Kickstarter projects:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to sync Kickstarter projects"
    });
  }
});

export { sync_post as default };
//# sourceMappingURL=sync.post.mjs.map
