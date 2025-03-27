<!-- 
  IMPORTANT RULES TO FOLLOW:
  1. Always use v-model:open for UModal components
  2. Example: <UModal v-model:open="showModal">
  3. This is a critical rule that must be followed for all modals in this project
-->
<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Quản lý Kickstarter</h1>
      <div class="flex gap-2">
        <UButton
          color="primary"
          icon="i-heroicons-arrow-path"
          @click="refreshData"
        >
          Làm mới
        </UButton>
        <UButton
          color="primary"
          icon="i-heroicons-arrow-path"
          :loading="syncing"
          @click="syncProjects"
        >
          Đồng bộ
        </UButton>
      </div>
    </div>

    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Danh sách dự án</h2>
          <div class="flex gap-2">
            <USelect
              v-model="status"
              :options="[
                { label: 'Tất cả', value: '' },
                { label: 'Sắp tới', value: 'upcoming' },
                { label: 'Đang diễn ra', value: 'ongoing' },
                { label: 'Đã kết thúc', value: 'ended' }
              ]"
              class="w-40"
            />
          </div>
        </div>
      </template>

      <UTable
        :columns="columns"
        :data="projects"
        :loading="loading"
      >
        <template #status-cell="{ row }">
          <UBadge
            :color="getStatusColor(row.original.status)"
            :label="getStatusLabel(row.original.status)"
          />
        </template>

        <template #rewards-cell="{ row }">
          <div class="flex items-center gap-2">
            <UBadge
              :color="row.original.claimed ? 'success' : 'neutral'"
              :label="row.original.claimed ? 'Đã nhận' : 'Chưa nhận'"
            />
            <span>{{ formatNumber(row.original.reward) }} USDT</span>
          </div>
        </template>

        <template #actions-cell="{ row }">
          <div class="flex gap-2">
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-pencil-square"
              @click="editProject(row.original)"
            />
            <UButton
              color="error"
              variant="ghost"
              icon="i-heroicons-trash"
              @click="confirmDelete(row.original)"
            />
          </div>
        </template>
      </UTable>

      <template #footer>
        <div class="flex justify-between items-center">
          <UPagination
            v-model="page"
            :total="total"
            :per-page="limit"
            @update:model-value="refreshData"
          />
          <USelect
            v-model="limit"
            :options="[10, 20, 50, 100]"
            class="w-24"
            @update:model-value="refreshData"
          />
        </div>
      </template>
    </UCard>

    <!-- Edit Project Modal -->
    <UModal v-model:open="showEditModal">
      <template #body>
        <UCard>
          <template #header>
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold">Chỉnh sửa phần thưởng</h3>
              <UButton
                color="neutral"
                variant="ghost"
                icon="i-heroicons-x-mark"
                @click="showEditModal = false"
              />
            </div>
          </template>

          <div class="space-y-4">
            <UFormGroup label="Số lượng USDT">
              <UInput
                v-model="editingProject.reward"
                type="number"
                step="0.01"
              />
            </UFormGroup>

            <UFormGroup label="Trạng thái">
              <UCheckbox
                v-model="editingProject.claimed"
                label="Đã nhận"
              />
            </UFormGroup>
          </div>

          <template #footer>
            <div class="flex justify-end gap-2">
              <UButton
                color="neutral"
                variant="ghost"
                @click="showEditModal = false"
              >
                Hủy
              </UButton>
              <UButton
                color="primary"
                @click="saveRewards"
              >
                Lưu
              </UButton>
            </div>
          </template>
        </UCard>
      </template>
    </UModal>

    <!-- Delete Confirmation Modal -->
    <UModal v-model:open="showDeleteModal">
      <template #body>
        <UCard>
          <template #header>
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold">Xác nhận xóa</h3>
              <UButton
                color="neutral"
                variant="ghost"
                icon="i-heroicons-x-mark"
                @click="showDeleteModal = false"
              />
            </div>
          </template>

          <div class="p-4">
            <p>Bạn có chắc chắn muốn xóa dự án "{{ deletingProject?.name }}" không?</p>
            <p class="text-sm text-gray-500 mt-2">Hành động này không thể hoàn tác.</p>
          </div>

          <template #footer>
            <div class="flex justify-end gap-2">
              <UButton
                color="neutral"
                variant="ghost"
                @click="showDeleteModal = false"
              >
                Hủy
              </UButton>
              <UButton
                color="error"
                :loading="deleting"
                @click="deleteProject"
              >
                Xóa
              </UButton>
            </div>
          </template>
        </UCard>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Project {
  projectId: string
  name: string
  description: string
  startTime: string
  endTime: string
  status: 'upcoming' | 'ongoing' | 'ended'
  reward: number
  claimed: boolean
  claimedAt?: Date
  createdAt: Date
  updatedAt: Date
}

const columns = [
  {
    key: 'projectId',
    id: 'projectId',
    header: 'ID',
    accessorKey: 'projectId'    
  },
  {
    key: 'name',
    id: 'name',
    header: 'Tên dự án',
    accessorKey: 'name'
  },
  {
    key: 'status',
    id: 'status',
    header: 'Trạng thái',
    accessorKey: 'status'
  },
  {
    key: 'startTime',
    formatter: (value: Date) => formatDate(value),
    id: 'startTime',
    header: 'Bắt đầu',
    accessorKey: 'startTime'
  },
  {
    key: 'endTime',
    formatter: (value: Date) => formatDate(value),
    id: 'endTime',
    header: 'Kết thúc',
    accessorKey: 'endTime'
  },
  {
    key: 'reward',
    id: 'reward',
    header: 'Phần thưởng',
    accessorKey: 'reward'
  },
  {
    key: 'actions',
    id: 'actions',
    header: 'Thao tác',
    accessorKey: 'actions'
  }
] as const

const loading = ref(false)
const projects = ref<Project[]>([])
const total = ref(0)
const page = ref(1)
const limit = ref(10)
const status = ref('')

const showEditModal = ref(false)
const showRewardsModal = ref(false)
const editingProject = ref<Project>({
  projectId: '',
  name: '',
  description: '',
  startTime: '',
  endTime: '',
  status: 'upcoming',
  reward: 0,
  claimed: false,
  createdAt: new Date(),
  updatedAt: new Date()
})

const syncing = ref(false)
const showDeleteModal = ref(false)
const deletingProject = ref<Project | null>(null)
const deleting = ref(false)

async function fetchProjects() {
  loading.value = true
  try {
    const response = await fetch(`/api/kickstarter?page=${page.value}&limit=${limit.value}&status=${status.value}`)
    const data = await response.json()
    projects.value = data.projects
    total.value = data.pagination.total
  } catch (error) {
    console.error('Error fetching projects:', error)
  } finally {
    loading.value = false
  }
}

function refreshData() {
  fetchProjects()
}

function getStatusColor(status: string) {
  switch (status) {
    case 'upcoming':
      return 'info'
    case 'ongoing':
      return 'success'
    case 'ended':
      return 'neutral'
    default:
      return 'neutral'
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'upcoming':
      return 'Sắp tới'
    case 'ongoing':
      return 'Đang diễn ra'
    case 'ended':
      return 'Đã kết thúc'
    default:
      return status
  }
}

function formatDate(date: Date) {
  return new Date(date).toLocaleString('vi-VN')
}

function formatNumber(number: number) {
  return new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number)
}

function editProject(project: Project) {
  editingProject.value = { ...project }
  console.log(editingProject.value)
  showEditModal.value = true
}

async function saveRewards() {
  try {
    await fetch(`/api/kickstarter/${editingProject.value.projectId}/rewards`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reward: editingProject.value.reward,
        claimed: editingProject.value.claimed
      })
    })
    showEditModal.value = false
    refreshData()
  } catch (error) {
    console.error('Error saving rewards:', error)
  }
}

async function syncProjects() {
  syncing.value = true
  try {
    await fetch('/api/kickstarter/sync', {
      method: 'POST'
    })
    await refreshData()
  } catch (error) {
    console.error('Error syncing projects:', error)
  } finally {
    syncing.value = false
  }
}

function confirmDelete(project: Project) {
  deletingProject.value = project
  showDeleteModal.value = true
}

async function deleteProject() {
  if (!deletingProject.value) return
  
  deleting.value = true
  try {
    await fetch(`/api/kickstarter/${deletingProject.value.projectId}`, {
      method: 'DELETE'
    })
    showDeleteModal.value = false
    refreshData()
  } catch (error) {
    console.error('Error deleting project:', error)
  } finally {
    deleting.value = false
    deletingProject.value = null
  }
}

// Watch for changes
watch([status, page, limit], () => {
  refreshData()
})

// Initial load
onMounted(() => {
  refreshData()
})
</script> 