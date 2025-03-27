import { userService } from '../../services/user.service'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw new Error('User ID is required')
    }

    await userService.deleteUser(id)
    return { message: 'User deleted successfully' }
  } catch (error: any) {
    throw createError({
      statusCode: error.message.includes('not found') ? 404 : 500,
      message: error.message || 'Error deleting user'
    })
  }
}) 