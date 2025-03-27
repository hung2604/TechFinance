import { H3Event } from 'h3'
import { Kickstarter } from '../../models/Kickstarter'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const id = getRouterParam(event, 'id')
    const project = await Kickstarter.findOne({ projectId: id })

    if (!project) {
      throw createError({
        statusCode: 404,
        message: 'Kickstarter project not found'
      })
    }

    return project
  } catch (error: any) {
    console.error('Error fetching Kickstarter project:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to fetch Kickstarter project'
    })
  }
}) 