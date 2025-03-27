<template>
  <div class="space-y-6">
    <!-- Header with actions -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Lịch sử mua MX</h1>
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
            <div class="text-sm text-gray-500 dark:text-gray-400">Số lượng MX đang sở hữu</div>
            <div class="text-xl font-semibold">{{ formatMX(stats.totalCoins) }}</div>
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
        :data="records"
        :columns="columns"
        :loading="loading"
        :sort="{ column: sortBy, direction: sortDirection }"
        @sort="handleSort"
        sticky
      >
        <template #empty-state>
          <div class="text-center py-4 text-gray-500">
            <UIcon name="i-heroicons-inbox" class="w-8 h-8 mx-auto mb-2" />
            <p>Không có dữ liệu</p>
          </div>
        </template>

        <template #loading-state>
          <div class="text-center py-4">
            <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 mx-auto mb-2 animate-spin" />
            <p>Đang tải dữ liệu...</p>
          </div>
        </template>

        <template #quantity-cell="{ row }">
          {{ formatMX(row.original.quantity) }}
        </template>

        <template #amount-cell="{ row }">
          {{ formatCurrency(row.original.amount) }}
        </template>

        <template #coinValue-cell="{ row }">
          {{ formatCurrency(row.original.coinValue) }}
        </template>

        <template #purchaseDate-cell="{ row }">
          {{ formatDate(row.original.purchaseDate) }}
        </template>

        <template #actions-cell="{ row }">
          <div class="flex items-center gap-2">
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-pencil-square"
              size="xs"
              @click="openEditModal(row.original)"
            />
            <UPopover :dismissible="false" :ui="{ content: 'p-4' }">
              <UButton
                color="red"
                variant="ghost"
                icon="i-heroicons-trash"
                size="xs"
              />
              <template #content>
                <div class="p-4 space-y-4">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-red-500" />
                    <p class="font-medium">Xác nhận xóa</p>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Bạn có chắc chắn muốn xóa bản ghi này?
                  </p>
                  <div class="flex justify-end gap-2">
                    <UButton
                      color="gray"
                      variant="soft"
                      size="sm"
                      @click="$refs.deletePopover?.close()"
                    >
                      Hủy
                    </UButton>
                    <UButton
                      color="red"
                      variant="solid"
                      size="sm"
                      :loading="loading"
                      @click="handleDelete(row.original)"
                    >
                      Xóa
                    </UButton>
                  </div>
                </div>
              </template>
            </UPopover>
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
          :page-count="pagination.totalPages"
          @change="fetchRecords"
        />
      </div>
    </UCard>

    <!-- Create/Edit Modal -->
    <UModal v-model:open="modal.isOpen" :ui="{ width: 'max-w-xl' }">
      <template #header>
        <div class="flex items-center gap-3">
          <div class="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <UIcon 
              :name="isEditing ? 'i-heroicons-pencil-square' : 'i-heroicons-plus'" 
              class="w-5 h-5 text-primary-500"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ isEditing ? 'Cập nhật' : 'Thêm mới' }} lịch sử mua MX
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ isEditing ? 'Chỉnh sửa thông tin giao dịch mua USDT' : 'Nhập thông tin cho giao dịch mua USDT mới' }}
            </p>
          </div>
        </div>
      </template>

      <template #body>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="space-y-6 p-2">
            <!-- Ngày mua -->
            <div class="form-group">
              <label class="block mb-2">
                <span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                  <UIcon name="i-heroicons-calendar-days" class="w-5 h-5 text-gray-500" />
                  Ngày mua
                  <span class="text-red-500 text-sm">*</span>
                </span>
              </label>
              <div class="relative">
                <UInput
                  v-model="form.purchaseDate"
                  type="date"
                  :ui="{ 
                    width: 'w-full',
                    base: 'h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
                    icon: { trailing: { name: 'i-heroicons-calendar' } }
                  }"
                  placeholder="Chọn ngày mua"
                />
                <div v-if="validation.errors.purchaseDate" class="absolute -bottom-6 left-0">
                  <span class="text-sm text-red-500 flex items-center gap-1">
                    <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4" />
                    {{ validation.errors.purchaseDate }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Số lượng và Số tiền -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Số lượng MX -->
              <div class="form-group">
                <label class="block mb-2">
                  <span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                    <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-gray-500" />
                    Số lượng MX
                    <span class="text-red-500 text-sm">*</span>
                  </span>
                </label>
                <div class="relative">
                  <UInput
                    v-model="form.quantity"
                    type="number"
                    min="0"
                    step="0.01"
                    :ui="{ 
                      width: 'w-full',
                      base: 'h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
                      icon: { trailing: { name: 'i-heroicons-currency-dollar' } }
                    }"
                    placeholder="Nhập số lượng"
                  />
                  <div v-if="validation.errors.quantity" class="absolute -bottom-6 left-0">
                    <span class="text-sm text-red-500 flex items-center gap-1">
                      <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4" />
                      {{ validation.errors.quantity }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Số tiền -->
              <div class="form-group">
                <label class="block mb-2">
                  <span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                    <UIcon name="i-heroicons-banknotes" class="w-5 h-5 text-gray-500" />
                    Số tiền (USDT)
                    <span class="text-red-500 text-sm">*</span>
                  </span>
                </label>
                <div class="relative">
                  <UInput
                    v-model="form.amount"
                    type="number"
                    min="0"
                    step="0.01"
                    :ui="{ 
                      width: 'w-full',
                      base: 'h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
                      icon: { trailing: { name: 'i-heroicons-banknotes' } }
                    }"
                    placeholder="Nhập số tiền"
                  />
                  <div v-if="validation.errors.amount" class="absolute -bottom-6 left-0">
                    <span class="text-sm text-red-500 flex items-center gap-1">
                      <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4" />
                      {{ validation.errors.amount }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Giá trị 1 MX -->
            <div class="form-group">
              <label class="block mb-2">
                <span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                  <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-gray-500" />
                  Giá trị 1 MX (USDT)
                </span>
              </label>
              <div class="relative">
                <UInput
                  v-model="form.coinValue"
                  type="number"
                  readonly
                  disabled
                  :ui="{ 
                    width: 'w-full',
                    base: 'h-12 bg-gray-50 dark:bg-gray-800 cursor-not-allowed',
                    icon: { trailing: { name: 'i-heroicons-lock-closed' } }
                  }"
                  :placeholder="form.quantity && form.amount ? formatMX(calculatedCoinValue) : 'Được tính tự động'"
                />
              </div>
            </div>
          </div>
        </form>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3">
          <UButton
            color="gray"
            variant="soft"
            :ui="{ 
              padding: 'px-6 py-2.5',
              font: 'font-medium',
              base: 'transition-all duration-200 hover:opacity-80'
            }"
            @click="modal.close"
          >
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5 mr-1.5" />
            Hủy
          </UButton>
          <UButton
            color="primary"
            :loading="submitting"
            :ui="{ 
              padding: 'px-6 py-2.5',
              font: 'font-medium',
              base: 'transition-all duration-200 hover:opacity-80'
            }"
            @click="handleSubmit"
          >
            <template v-if="!submitting">
              <UIcon 
                :name="isEditing ? 'i-heroicons-pencil-square' : 'i-heroicons-plus'" 
                class="w-5 h-5 mr-1.5" 
              />
              {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
            </template>
            <template v-else>
              <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 mr-1.5 animate-spin" />
              {{ isEditing ? 'Đang cập nhật...' : 'Đang thêm...' }}
            </template>
          </UButton>
        </div>
      </template>
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
    accessorKey: 'purchaseDate',
    header: 'Ngày mua',
    sortable: true
  },
  {
    accessorKey: 'quantity',
    header: 'Số lượng MX',
    sortable: true
  },
  {
    accessorKey: 'amount',
    header: 'Số tiền',
    sortable: true
  },
  {
    accessorKey: 'coinValue',
    header: 'Giá trị 1 MX',
    sortable: true
  },
  {
    accessorKey: 'actions',
    header: 'Thao tác',
    sortable: false
  }
]

const records = ref<CoinHistoryRecord[]>([])
const loading = ref(false)
const submitting = ref(false)
const currentPage = ref(1)
const pagination = ref({
  page: 1,
  limit: 1000,
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

// Thêm computed property để tính giá trị 1 đồng
const calculatedCoinValue = computed(() => {
  const quantity = Number(form.value.quantity)
  const amount = Number(form.value.amount)
  if (quantity && amount) {
    return amount / quantity
  }
  return 0
})

// Watch để cập nhật coinValue khi số lượng hoặc số tiền thay đổi
watch([() => form.value.quantity, () => form.value.amount], () => {
  form.value.coinValue = calculatedCoinValue.value
})

const validation = useFormValidation({
  purchaseDate: { required: true },
  quantity: { required: true, min: 0 },
  amount: { required: true, min: 0 }
})

// Format helpers
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

const formatNumber = (value: number, decimals = 2) => {
  return new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value)
}

const formatMX = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value) + ' MX'
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

    console.log('Fetching records with params:', queryParams.toString())
    const response = await $fetch<PaginationResponse>(`/api/coin-history?${queryParams}`)
    console.log('API Response:', response)
    
    if (!response?.data) {
      console.error('No data in response:', response)
      return
    }

    records.value = response.data
    pagination.value = response.pagination
    calculateStats(response.data)
    console.log('Updated records:', records.value)
  } catch (error) {
    console.error('Error fetching records:', error)
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
  modal.open()
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
  modal.open(row)
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

const handleDelete = async (row: CoinHistoryRecord) => {
  try {
    loading.value = true
    await $fetch(`/api/coin-history/${row._id}`, {
      method: 'DELETE'
    })
    useCustomToast().showSuccess('Xóa thành công')
    await fetchRecords()
  } catch (error) {
    console.error('Error deleting record:', error)
    useCustomToast().showError('Có lỗi xảy ra khi xóa dữ liệu')
  } finally {
    loading.value = false
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