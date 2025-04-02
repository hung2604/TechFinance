import { d as defineEventHandler, a as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { L as LoanService } from '../../../_/loan.service.mjs';
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
import '../../../_/Loan.mjs';
import '../../../_/User.mjs';
import 'bcrypt';

const _id__delete = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Loan ID is required"
      });
    }
    await LoanService.deleteLoan(id);
    return { success: true };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error deleting loan"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
