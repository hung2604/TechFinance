import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = await userService.createUser(body);
    return user;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || "Error creating user"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
