import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const loan = await LoanService.createLoan(body);
    return loan;
  } catch (error) {
    throw createError({
      statusCode: error.message.includes("not found") ? 404 : 500,
      message: error.message
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
