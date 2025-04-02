import { d as defineEventHandler, r as readBody, c as createError, s as setCookie } from '../../../nitro/nitro.mjs';
import { a as authService } from '../../../_/auth.service.mjs';
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
import '../../../_/User.mjs';
import 'bcrypt';
import 'jsonwebtoken';

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        message: "Email v\xE0 m\u1EADt kh\u1EA9u l\xE0 b\u1EAFt bu\u1ED9c"
      });
    }
    const result = await authService.login(body.email, body.password);
    if (body.remember) {
      setCookie(event, "token", result.token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7,
        // 7 days
        path: "/"
      });
    }
    return result;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "\u0110\xE3 c\xF3 l\u1ED7i x\u1EA3y ra"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
