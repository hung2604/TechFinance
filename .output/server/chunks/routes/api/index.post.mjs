import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const result = await coinHistoryService.create(body);
    return result;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: error.message
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
