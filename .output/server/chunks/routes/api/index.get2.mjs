import { d as defineEventHandler, g as getQuery, c as createError } from '../../nitro/nitro.mjs';
import { K as Kickstarter } from '../../_/Kickstarter.mjs';
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

const index_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const { status, page = 1, limit = 10 } = query;
    const filter = {};
    if (status) {
      filter.status = status;
    }
    const skip = (Number(page) - 1) * Number(limit);
    const projects = await Kickstarter.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit));
    const total = await Kickstarter.countDocuments(filter);
    return {
      projects,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit))
      }
    };
  } catch (error) {
    console.error("Error fetching Kickstarter projects:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to fetch Kickstarter projects"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
