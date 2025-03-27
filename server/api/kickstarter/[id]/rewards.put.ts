import { H3Event } from 'h3'
import { Kickstarter } from '../../../models/Kickstarter'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const id = getRouterParam(event, 'id')
    const { reward, claimed } = await readBody(event)

    const project = await Kickstarter.findOne({ projectId: id })
    if (!project) {
      throw createError({
        statusCode: 404,
        message: 'Project not found'
      })
    }

    project.reward = reward
    project.claimed = claimed
    if (claimed) {
      project.claimedAt = new Date()
    }

    await project.save()

    return {
      success: true,
      message: 'Reward updated successfully'
    }
  } catch (error: any) {
    console.error('Error updating reward:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error updating reward'
    })
  }
}) 