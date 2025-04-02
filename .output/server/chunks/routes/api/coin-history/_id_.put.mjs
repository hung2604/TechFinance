import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { c as coinHistoryService } from '../../../_/coin-history.service.mjs';
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
import '../../../_/CoinHistory.mjs';
import '../../../_/Loan.mjs';

const _id__put = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw new Error("ID is required");
    }
    const body = await readBody(event);
    const result = await coinHistoryService.update(id, body);
    if (!result) {
      throw createError({
        statusCode: 404,
        message: "Record not found"
      });
    }
    return result;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 400,
      message: error.message
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
