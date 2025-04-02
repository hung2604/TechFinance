import { d as defineEventHandler, s as setCookie, c as createError } from '../../../nitro/nitro.mjs';
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

const logout_post = defineEventHandler(async (event) => {
  try {
    setCookie(event, "auth_token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 0
      // This will delete the cookie
    });
    return { success: true };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || "Error logging out"
    });
  }
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
