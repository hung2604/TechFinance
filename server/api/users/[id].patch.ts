import { userService } from '../../services/user.service'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw new Error('User ID is required')
    }

    const body = await readBody(event)
    const user = await userService.updateUser(id, body)
    return user
  } catch (error: any) {
    throw createError({
      statusCode: error.message.includes('not found') ? 404 : 500,
      message: error.message || 'Error updating user'
    })
  }
}) 