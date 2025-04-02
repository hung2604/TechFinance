import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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

const register_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        message: "Email v\xE0 m\u1EADt kh\u1EA9u l\xE0 b\u1EAFt bu\u1ED9c"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: "Email kh\xF4ng h\u1EE3p l\u1EC7"
      });
    }
    if (body.password.length < 6) {
      throw createError({
        statusCode: 400,
        message: "M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 6 k\xFD t\u1EF1"
      });
    }
    const result = await authService.register(body.email, body.password);
    return result;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "\u0110\xE3 c\xF3 l\u1ED7i x\u1EA3y ra"
    });
  }
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
