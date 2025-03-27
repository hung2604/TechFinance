import { H3Event } from 'h3'
import { Kickstarter } from '../../models/Kickstarter'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event)
    const { status, page = 1, limit = 10 } = query

    const filter: any = {}
    if (status) {
      filter.status = status
    }

    const skip = (Number(page) - 1) * Number(limit)
    const projects = await Kickstarter.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))

    const total = await Kickstarter.countDocuments(filter)

    return {
      projects,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit))
      }
    }
  } catch (error: any) {
    console.error('Error fetching Kickstarter projects:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch Kickstarter projects'
    })
  }
}) 