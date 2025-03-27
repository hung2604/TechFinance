import { H3Event } from 'h3'
import { Kickstarter } from '../../models/Kickstarter'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const id = getRouterParam(event, 'id')

    const project = await Kickstarter.findOneAndDelete({ projectId: id })
    if (!project) {
      throw createError({
        statusCode: 404,
        message: 'Project not found'
      })
    }

    return {
      success: true,
      message: 'Project deleted successfully'
    }
  } catch (error: any) {
    console.error('Error deleting project:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error deleting project'
    })
  }
}) 