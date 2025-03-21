<template>
  <div class="space-y-6">
    <!-- Header with actions -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Lịch sử mua coin</h1>
      <div class="flex items-center gap-2">
        <UButton
          color="gray"
          variant="soft"
          icon="i-heroicons-arrow-down-tray"
          @click="exportToExcel"
        >
          Xuất Excel
        </UButton>
        <UButton
          color="primary"
          icon="i-heroicons-plus"
          @click="openCreateModal"
        >
          Thêm mới
        </UButton>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <UIcon name="i-heroicons-currency-dollar" class="w-6 h-6 text-primary-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Tổng số coin</div>
            <div class="text-xl font-semibold">{{ formatNumber(stats.totalCoins) }}</div>
          </div>
        </div>
      </UCard>

      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
            <UIcon name="i-heroicons-banknotes" class="w-6 h-6 text-green-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Tổng tiền đã mua</div>
            <div class="text-xl font-semibold">{{ formatCurrency(stats.totalAmount) }}</div>
          </div>
        </div>
      </UCard>

      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
            <UIcon name="i-heroicons-chart-bar" class="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Giá trung bình</div>
            <div class="text-xl font-semibold">{{ formatCurrency(stats.averagePrice) }}</div>
          </div>
        </div>
      </UCard>

      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
            <UIcon name="i-heroicons-clock" class="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Lần mua gần nhất</div>
            <div class="text-xl font-semibold">{{ stats.lastPurchase ? formatDate(stats.lastPurchase) : 'Chưa có' }}</div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Filters -->
    <UCard>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UFormGroup label="Từ ngày">
          <UInput
            v-model="filters.startDate"
            type="date"
          />
        </UFormGroup>

        <UFormGroup label="Đến ngày">
          <UInput
            v-model="filters.endDate"
            type="date"
          />
        </UFormGroup>

        <UFormGroup label="Khoảng giá">
          <div class="flex items-center gap-2">
            <UInput
              v-model="filters.minAmount"
              type="number"
              placeholder="Từ"
            />
            <span>-</span>
            <UInput
              v-model="filters.maxAmount"
              type="number"
              placeholder="Đến"
            />
          </div>
        </UFormGroup>
      </div>
      <div class="flex justify-end mt-4">
        <UButton
          color="gray"
          variant="soft"
          icon="i-heroicons-x-mark"
          @click="resetFilters"
        >
          Xóa bộ lọc
        </UButton>
      </div>
    </UCard>

    <!-- Data Table -->
    <UCard>
      <UTable
        :rows="records"
        :columns="columns"
        :loading="loading"
        :sort="{ column: sortBy, direction: sortDirection }"
        @sort="handleSort"
      >
        <template #amount-data="{ row }">
          {{ formatCurrency(row.amount) }}
        </template>

        <template #coinValue-data="{ row }">
          {{ formatCurrency(row.coinValue) }}
        </template>

        <template #purchaseDate-data="{ row }">
          {{ formatDate(row.purchaseDate) }}
        </template>

        <template #actions-data="{ row }">
          <div class="flex items-center gap-2">
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-pencil-square"
              size="xs"
              @click="openEditModal(row)"
            />
            <UButton
              color="red"
              variant="ghost"
              icon="i-heroicons-trash"
              size="xs"
              @click="confirmDelete(row)"
            />
          </div>
        </template>
      </UTable>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4 px-4">
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Tổng số: {{ pagination.total }} bản ghi
        </div>
        <UPagination
          v-model="currentPage"
          :total="pagination.total"
          :per-page="pagination.limit"
          @change="fetchRecords"
        />
      </div>
    </UCard>

    <!-- Create/Edit Modal -->
    <UModal v-model="showModal">
      <UCard>
        <template #header>
          <div class="text-lg font-semibold">
            {{ isEditing ? 'Cập nhật' : 'Thêm mới' }} lịch sử mua coin
          </div>
        </template>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <UFormGroup 
            label="Ngày mua" 
            required
            :error="validation.errors.purchaseDate"
          >
            <UInput
              v-model="form.purchaseDate"
              type="date"
              :ui="{ width: 'w-full' }"
            />
          </UFormGroup>

          <UFormGroup 
            label="Số lượng" 
            required
            :error="validation.errors.quantity"
          >
            <UInput
              v-model="form.quantity"
              type="number"
              min="0"
              step="0.01"
              :ui="{ width: 'w-full' }"
            />
          </UFormGroup>

          <UFormGroup 
            label="Số tiền" 
            required
            :error="validation.errors.amount"
          >
            <UInput
              v-model="form.amount"
              type="number"
              min="0"
              step="0.01"
              :ui="{ width: 'w-full' }"
            />
          </UFormGroup>

          <UFormGroup 
            label="Giá trị 1 coin" 
            required
            :error="validation.errors.coinValue"
          >
            <UInput
              v-model="form.coinValue"
              type="number"
              min="0"
              step="0.01"
              :ui="{ width: 'w-full' }"
            />
          </UFormGroup>
        </form>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton
              color="gray"
              variant="soft"
              @click="showModal = false"
            >
              Hủy
            </UButton>
            <UButton
              color="primary"
              :loading="submitting"
              @click="handleSubmit"
            >
              {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
interface CoinHistoryRecord {
  _id: string
  purchaseDate: string
  quantity: number
  amount: number
  coinValue: number
}

interface PaginationResponse {
  data: CoinHistoryRecord[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

interface Stats {
  totalCoins: number
  totalAmount: number
  averagePrice: number
  lastPurchase: string | null
}

const columns = [
  {
    key: 'purchaseDate',
    label: 'Ngày mua',
    sortable: true,
    id: 'purchaseDate'
  },
  {
    key: 'quantity',
    label: 'Số lượng',
    sortable: true,
    id: 'quantity'
  },
  {
    key: 'amount',
    label: 'Số tiền',
    sortable: true,
    id: 'amount'
  },
  {
    key: 'coinValue',
    label: 'Giá trị 1 coin',
    sortable: true,
    id: 'coinValue'
  },
  {
    key: 'actions',
    label: 'Thao tác',
    sortable: false,
    id: 'actions'
  }
]

const records = ref<CoinHistoryRecord[]>([])
const loading = ref(false)
const submitting = ref(false)
const currentPage = ref(1)
const pagination = ref({
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0
})

const stats = ref<Stats>({
  totalCoins: 0,
  totalAmount: 0,
  averagePrice: 0,
  lastPurchase: null
})

const filters = ref({
  startDate: '',
  endDate: '',
  minAmount: '',
  maxAmount: ''
})

const sortBy = ref('purchaseDate')
const sortDirection = ref<'asc' | 'desc'>('desc')

const form = ref({
  purchaseDate: '',
  quantity: 0,
  amount: 0,
  coinValue: 0
})

const isEditing = ref(false)
const editingId = ref('')

const modal = useModal()
const showModal = computed({
  get: () => modal.isOpen.value,
  set: (value: boolean) => {
    if (!value) modal.close()
  }
})

const validation = useFormValidation({
  purchaseDate: { required: true },
  quantity: { required: true, min: 0 },
  amount: { required: true, min: 0 },
  coinValue: { required: true, min: 0 }
})

// Format helpers
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('vi-VN').format(value)
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

// Calculate statistics
const calculateStats = (data: CoinHistoryRecord[]) => {
  const totalCoins = data.reduce((sum, record) => sum + record.quantity, 0)
  const totalAmount = data.reduce((sum, record) => sum + record.amount, 0)
  const averagePrice = totalAmount / totalCoins
  const lastPurchase = data[0]?.purchaseDate || null

  stats.value = {
    totalCoins,
    totalAmount,
    averagePrice: isNaN(averagePrice) ? 0 : averagePrice,
    lastPurchase
  }
}

// Filter and sort handlers
const handleSort = (column: string, direction: 'asc' | 'desc') => {
  sortBy.value = column
  sortDirection.value = direction
  fetchRecords()
}

const resetFilters = () => {
  filters.value = {
    startDate: '',
    endDate: '',
    minAmount: '',
    maxAmount: ''
  }
  fetchRecords()
}

// Export to Excel
const exportToExcel = async () => {
  try {
    // Tạo URL download với các filter hiện tại
    const queryParams = new URLSearchParams({
      ...(filters.value.startDate && { startDate: filters.value.startDate }),
      ...(filters.value.endDate && { endDate: filters.value.endDate }),
      ...(filters.value.minAmount && { minAmount: filters.value.minAmount }),
      ...(filters.value.maxAmount && { maxAmount: filters.value.maxAmount }),
      sortBy: sortBy.value,
      sortDirection: sortDirection.value
    })

    const { data: response } = await useFetch(`/api/coin-history/export?${queryParams}`)
    
    if (!response.value) {
      throw new Error('No data received')
    }

    // Tạo blob và download
    const blob = new Blob([response.value as BlobPart], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `lich-su-mua-coin-${new Date().toISOString().split('T')[0]}.xlsx`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)

    useCustomToast().showSuccess('Xuất file thành công')
  } catch (error) {
    useCustomToast().showError('Có lỗi xảy ra khi xuất file')
  }
}

// CRUD operations
const fetchRecords = async () => {
  loading.value = true
  try {
    const queryParams = new URLSearchParams({
      page: currentPage.value.toString(),
      limit: pagination.value.limit.toString(),
      ...(filters.value.startDate && { startDate: filters.value.startDate }),
      ...(filters.value.endDate && { endDate: filters.value.endDate }),
      ...(filters.value.minAmount && { minAmount: filters.value.minAmount }),
      ...(filters.value.maxAmount && { maxAmount: filters.value.maxAmount }),
      sortBy: sortBy.value,
      sortDirection: sortDirection.value
    })

    const response = await $fetch<PaginationResponse>(`/api/coin-history?${queryParams}`)
    records.value = response.data
    pagination.value = response.pagination
    calculateStats(response.data)
  } catch (error) {
    useCustomToast().showError('Có lỗi xảy ra khi tải dữ liệu')
  } finally {
    loading.value = false
  }
}

const openCreateModal = () => {
  isEditing.value = false
  editingId.value = ''
  form.value = {
    purchaseDate: new Date().toISOString().split('T')[0],
    quantity: 0,
    amount: 0,
    coinValue: 0
  }
  showModal.value = true
}

const openEditModal = (row: CoinHistoryRecord) => {
  isEditing.value = true
  editingId.value = row._id
  form.value = {
    purchaseDate: new Date(row.purchaseDate).toISOString().split('T')[0],
    quantity: row.quantity,
    amount: row.amount,
    coinValue: row.coinValue
  }
  showModal.value = true
}

const handleSubmit = async () => {
  if (!validation.validate(form.value)) {
    useCustomToast().showError('Vui lòng kiểm tra lại thông tin')
    return
  }

  submitting.value = true
  try {
    const data = {
      ...form.value,
      quantity: Number(form.value.quantity),
      amount: Number(form.value.amount),
      coinValue: Number(form.value.coinValue)
    }

    if (isEditing.value) {
      await $fetch(`/api/coin-history/${editingId.value}`, {
        method: 'PUT',
        body: data
      })
      useCustomToast().showSuccess('Cập nhật thành công')
    } else {
      await $fetch('/api/coin-history', {
        method: 'POST',
        body: data
      })
      useCustomToast().showSuccess('Thêm mới thành công')
    }

    modal.close()
    validation.clearErrors()
    await fetchRecords()
  } catch (error) {
    useCustomToast().showError('Có lỗi xảy ra khi lưu dữ liệu')
  } finally {
    submitting.value = false
  }
}

const confirmDelete = async (row: CoinHistoryRecord) => {
  const confirmed = await useConfirmDialog().reveal({
    message: 'Bạn có chắc chắn muốn xóa bản ghi này?',
    confirmLabel: 'Xóa',
    cancelLabel: 'Hủy',
    type: 'danger'
  })

  if (confirmed) {
    try {
      await $fetch(`/api/coin-history/${row._id}`, {
        method: 'DELETE'
      })
      useCustomToast().showSuccess('Xóa thành công')
      await fetchRecords()
    } catch (error) {
      useCustomToast().showError('Có lỗi xảy ra khi xóa dữ liệu')
    }
  }
}

// Watch filters
watch(filters, () => {
  currentPage.value = 1
  fetchRecords()
}, { deep: true })

// Initial fetch
onMounted(() => {
  fetchRecords()
})
</script> 