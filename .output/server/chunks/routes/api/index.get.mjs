import { d as defineEventHandler, g as getQuery, c as createError } from '../../nitro/nitro.mjs';
import { c as coinHistoryService } from '../../_/coin-history.service.mjs';
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
import '../../_/CoinHistory.mjs';
import '../../_/Loan.mjs';

const index_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const result = await coinHistoryService.getAll(page, limit, query);
    return result;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: error.message
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
