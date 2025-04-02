import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { u as userService } from '../../../_/user.service.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw new Error("User ID is required");
    }
    await userService.deleteUser(id);
    return { message: "User deleted successfully" };
  } catch (error) {
    throw createError({
      statusCode: error.message.includes("not found") ? 404 : 500,
      message: error.message || "Error deleting user"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
