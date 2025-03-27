import { userService } from '../../services/user.service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const user = await userService.createUser(body)
    return user
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Error creating user'
    })
  }
}) 