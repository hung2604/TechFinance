import { Kickstarter } from '../models/Kickstarter'

const MEXC_API_URL = 'http://45.251.115.153:3000/api/mexc'

export async function syncKickstarterProjects() {
  try {
    console.log('Starting Kickstarter projects sync1...')
    const response = await fetch(MEXC_API_URL)
    console.log('Call MEXC API:', response.url)
    const data = await response.json()

    // Chuyển đổi dữ liệu từ MEXC sang định dạng của chúng ta
    const projects = data.data.map((item: any) => ({
      projectId: item.id.toString(),
      name: item.profitCurrency,
      description: item.international.projectIntroduction,
      startTime: new Date(item.startTime),
      endTime: new Date(item.endTime),
      status: getProjectStatus(item.startTime, item.endTime),
      rewards: item.rewards?.map((reward: any) => ({
        tier: reward.name,
        amount: reward.amount,
        description: reward.description,
        claimed: false
      })) || []
    }))

    // Lấy danh sách projectId hiện có
    const existingProjects = await Kickstarter.find({}, { projectId: 1 })
    const existingProjectIds = new Set(existingProjects.map(p => p.projectId))

    // Xử lý từng dự án
    for (const project of projects) {
      if (existingProjectIds.has(project.projectId)) {
        // Cập nhật dự án đã tồn tại
        await Kickstarter.findOneAndUpdate(
          { projectId: project.projectId },
          {
            $set: {
              name: project.name,
              description: project.description,
              startTime: project.startTime,
              endTime: project.endTime,
              status: project.status,
              updatedAt: new Date()
            }
          }
        )
        console.log(`Updated project: ${project.projectId}`)
      } else {
        // Tạo dự án mới
        await Kickstarter.create(project)
        console.log(`Created new project: ${project.projectId}`)
      }
    }

    console.log('Kickstarter projects sync completed')
  } catch (error) {
    console.error('Error syncing Kickstarter projects:', error)
    throw error
  }
}

function getProjectStatus(startTime: string, endTime: string): 'upcoming' | 'ongoing' | 'ended' {
  const now = new Date()
  const start = new Date(startTime)
  const end = new Date(endTime)

  if (now < start) {
    return 'upcoming'
  } else if (now > end) {
    return 'ended'
  } else {
    return 'ongoing'
  }
}

// Chạy job ngay lập tức
syncKickstarterProjects()
