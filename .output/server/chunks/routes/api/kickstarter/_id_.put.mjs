import { d as defineEventHandler, a as getRouterParam, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const body = await readBody(event);
    const project = await Kickstarter.findOne({ projectId: id });
    if (!project) {
      throw createError({
        statusCode: 404,
        message: "Kickstarter project not found"
      });
    }
    Object.assign(project, body);
    await project.save();
    return project;
  } catch (error) {
    console.error("Error updating Kickstarter project:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to update Kickstarter project"
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
