import { d as defineEventHandler, a as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const project = await Kickstarter.findOneAndDelete({ projectId: id });
    if (!project) {
      throw createError({
        statusCode: 404,
        message: "Project not found"
      });
    }
    return {
      success: true,
      message: "Project deleted successfully"
    };
  } catch (error) {
    console.error("Error deleting project:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error deleting project"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
