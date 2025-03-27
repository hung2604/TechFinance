import { H3Event } from 'h3'
import { Kickstarter } from '../../models/Kickstarter'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    const project = await Kickstarter.findOne({ projectId: id })

    if (!project) {
      throw createError({
        statusCode: 404,
        message: 'Kickstarter project not found'
      })
    }

    // Update project fields
    Object.assign(project, body)
    await project.save()

    return project
  } catch (error: any) {
    console.error('Error updating Kickstarter project:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to update Kickstarter project'
    })
  }
}) 