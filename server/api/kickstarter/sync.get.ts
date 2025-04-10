import { H3Event } from 'h3'
import { syncKickstarterProjects } from '../../jobs/kickstarter'

export default defineEventHandler(async (event: H3Event) => {
  try {
    await syncKickstarterProjects()
    return {
      success: true,
      message: 'Kickstarter projects sync completed'
    }
  } catch (error: any) {
    console.error('Error syncing Kickstarter projects:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to sync Kickstarter projects'
    })
  }
}) 