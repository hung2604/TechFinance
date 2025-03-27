import { userService } from '../../services/user.service'

export default defineEventHandler(async () => {
  try {
    const users = await userService.getUsers()
    return users
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Error fetching users'
    })
  }
}) 