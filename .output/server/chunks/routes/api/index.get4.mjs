import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { u as userService } from '../../_/user.service.mjs';
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
import '../../_/User.mjs';
import 'bcrypt';

const index_get = defineEventHandler(async () => {
  try {
    const users = await userService.getUsers();
    return users;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || "Error fetching users"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
