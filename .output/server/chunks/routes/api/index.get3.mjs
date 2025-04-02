import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { L as LoanService } from '../../_/loan.service.mjs';
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
import '../../_/Loan.mjs';
import '../../_/User.mjs';
import 'bcrypt';

const index_get = defineEventHandler(async () => {
  try {
    const loans = await LoanService.getLoans();
    return loans;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
