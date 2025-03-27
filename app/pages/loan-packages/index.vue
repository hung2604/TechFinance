<template>
  <div>
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Quản lý khoản vay</h2>
          <UButton
            icon="i-heroicons-plus"
            color="primary"
            @click="isModalOpen = true"
          >
            Thêm khoản vay
          </UButton>
        </div>
      </template>

      <!-- Loans table -->
      <UTable
        :data="loans"
        :columns="columns"
        :loading="isLoading"
      >
        <template #amount-cell="{ row }">
          {{ formatCurrency(row.original.amountVND) }} VND
          <div class="text-sm text-gray-500">
            ≈ {{ row.original.amountUSDT }} USDT
          </div>
          <div class="text-sm text-blue-500">
            Lãi phải trả: {{ formatCurrency(calculateInterestToDate(row.original)) }} VND
          </div>
        </template>

        <template #term-cell="{ row }">
          {{ formatTerm(row.original.term) }}
        </template>

        <template #interest-rate-cell="{ row }">
          <div class="flex items-center">
            {{ row.original.interestRate }}
            <span class="text-gray-500 ml-0.5">%</span>
          </div>
        </template>

        <template #borrower-cell="{ row }">
          {{ row.original.borrowerId?.name ? `${row.original.borrowerId.name} (${row.original.borrowerId.email})` : 'N/A' }}
        </template>

        <template #dates-cell="{ row }">
          <div>Ngày vay: {{ formatDate(row.original.loanDate) }}</div>
          <div class="text-sm text-gray-500">
            Bắt đầu tính lãi: {{ formatDate(row.original.interestStartDate) }}
          </div>
        </template>

        <template #status-cell="{ row }">
          <UBadge
            :color="getStatusColor(row.original.status)"
            variant="subtle"
            size="sm"
          >
            {{ formatStatus(row.original.status) }}
          </UBadge>
        </template>

        <template #actions-cell="{ row }">
          <div class="flex items-center gap-2">
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-pencil-square"
              size="xs"
              @click="editLoan(row.original)"
            />
            <UButton
              color="red"
              variant="ghost"
              icon="i-heroicons-trash"
              size="xs"
              :loading="isDeleting"
              @click="deleteLoan(row.original._id)"
            />
          </div>
        </template>
      </UTable>
    </UCard>

    <!-- Add/Edit Modal -->
    <UModal
      v-model:open="isModalOpen"
      prevent-close
    >
      <template #header>
        <div class="text-xl font-semibold">
          {{ editingLoan ? 'Cập nhật khoản vay' : 'Thêm khoản vay mới' }}
        </div>
      </template>
      <template #body>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-2 gap-6">
            <!-- Amount VND -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Số tiền vay (VND) <span class="text-red-500">*</span>
              </label>
              <UInput
                v-model="form.amountVND"
                type="number"
                placeholder="Nhập số tiền VND"
                :ui="{ 
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  padding: 'pl-11 pr-4',
                  leading: 'absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              >
              </UInput>
              <div v-if="form.amountVND" class="text-sm text-gray-500">
                ≈ {{ calculateUSDT(form.amountVND) }} USDT
              </div>
            </div>

            <!-- Term -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Kỳ hạn <span class="text-red-500">*</span>
              </label>
              <USelect
                v-model="form.term"
                :items="termOptions"
                placeholder="Chọn kỳ hạn"
                :ui="{
                  select: {
                    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select',
                    inner: 'relative block w-full rounded-md h-[38px]'
                  }
                }"
              />
            </div>

            <!-- Interest Rate -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Lãi suất (%) <span class="text-red-500">*</span>
              </label>
              <UInput
                v-model="form.interestRate"
                type="number"
                min="0"
                max="20"
                step="0.1"
                placeholder="Nhập lãi suất"
                :ui="{
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              />
            </div>

            <!-- Borrower -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Người vay <span class="text-red-500">*</span>
              </label>
              <USelect
                v-model="form.borrowerId"
                :items="users"
                searchable
                placeholder="Chọn người vay"
                :ui="{
                  select: {
                    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select',
                    inner: 'relative block w-full rounded-md h-[38px]'
                  }
                }"
              />
            </div>

            <!-- Loan Date -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Ngày vay <span class="text-red-500">*</span>
              </label>
              <UInput
                v-model="form.loanDate"
                type="date"
                :ui="{
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              />
            </div>

            <!-- Interest Start Date -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Ngày bắt đầu tính lãi <span class="text-red-500">*</span>
              </label>
              <UInput
                v-model="form.interestStartDate"
                type="date"
                :ui="{
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              />
            </div>
          </div>

          <!-- Description -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Mô tả <span class="text-red-500">*</span>
            </label>
            <UTextarea
              v-model="form.description"
              placeholder="Nhập mô tả khoản vay"
              :ui="{
                base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-textarea',
                padding: 'py-2 px-3',
                inner: 'relative block w-full rounded-md'
              }"
              :rows="3"
            />
          </div>
        </form>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3">
          <UButton
            color="gray"
            variant="soft"
            @click="closeModal"
          >
            Hủy
          </UButton>
          <UButton
            color="primary"
            :loading="isSubmitting"
            @click="handleSubmit"
          >
            {{ editingLoan ? 'Cập nhật' : 'Thêm mới' }}
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)
const isLoading = ref(true)
const isSubmitting = ref(false)
const isDeleting = ref(false)
const loans = ref([])
const editingLoan = ref<any>(null)

// Fetch users with transformed data for select
const { data: usersList, refresh: refreshUsers } = useFetch<any[]>('/api/users')
const users = computed(() => {
  return (usersList.value || []).map((user: { name: string; email: string; _id: string }) => ({
    label: `${user.name} (${user.email})`,
    value: user._id
  }))
})

const form = reactive({
  amountVND: null as number | null,
  term: '',
  interestRate: null as number | null,
  borrowerId: '',
  loanDate: '',
  interestStartDate: '',
  description: ''
})

const termOptions = [
  { label: '3 tháng', value: '3_MONTHS' },
  { label: '6 tháng', value: '6_MONTHS' },
  { label: '1 năm', value: '1_YEAR' }
]

const columns = [
  {
    accessorKey: 'amount',
    header: 'Số tiền',
  },
  {
    accessorKey: 'term',
    header: 'Kỳ hạn',
  },
  {
    accessorKey: 'interestRate',
    header: 'Lãi suất',
  },
  {
    accessorKey: 'borrower',
    header: 'Người vay',
  },
  {
    accessorKey: 'dates',
    header: 'Thời gian',
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái',
  },
  {
    accessorKey: 'actions',
    header: 'Thao tác',
  }
]

// Format date for input fields
const formatDateForInput = (date: string) => {
  if (!date) return ''
  return new Date(date).toISOString().split('T')[0]
}

// Calculate loan status based on interest start date and term
const calculateLoanStatus = (interestStartDate: string, term: string) => {
  if (!interestStartDate) return 'NOT_STARTED'
  
  const today = new Date()
  const startDate = new Date(interestStartDate)
  let endDate = new Date(startDate)
  
  switch (term) {
    case '3_MONTHS':
      endDate.setMonth(startDate.getMonth() + 3)
      break
    case '6_MONTHS':
      endDate.setMonth(startDate.getMonth() + 6)
      break
    case '1_YEAR':
      endDate.setFullYear(startDate.getFullYear() + 1)
      break
  }
  
  if (today < startDate) return 'NOT_STARTED'
  if (today > endDate) return 'COMPLETED'
  return 'IN_PROGRESS'
}

// Fetch loans
const { data: loansList, refresh: refreshLoans } = useFetch<any[]>('/api/loans')
watch(loansList, (newValue: any[] | null) => {
  loans.value = (newValue || []).map(loan => ({
    ...loan,
    status: calculateLoanStatus(loan.interestStartDate, loan.term)
  }))
  isLoading.value = false
}, { immediate: true })

const fetchLoans = async () => {
  try {
    isLoading.value = true
    await refreshLoans()
  } catch (error) {
    console.error('Error fetching loans:', error)
  } finally {
    isLoading.value = false
  }
}

// Edit loan
const editLoan = (loan: any) => {
  editingLoan.value = loan
  Object.assign(form, {
    amountVND: loan.amountVND,
    term: loan.term,
    interestRate: loan.interestRate,
    borrowerId: loan.borrowerId?._id,
    loanDate: formatDateForInput(loan.loanDate),
    interestStartDate: formatDateForInput(loan.interestStartDate),
    description: loan.description
  })
  isModalOpen.value = true
}

// Delete loan
const deleteLoan = async (id: string) => {
  try {
    isDeleting.value = true
    await $fetch(`/api/loans/${id}`, {
      method: 'DELETE'
    })
    await fetchLoans()
  } catch (error) {
    console.error('Error deleting loan:', error)
  } finally {
    isDeleting.value = false
  }
}

// Submit form
const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    const payload = { ...form }
    
    if (editingLoan.value) {
      await $fetch(`/api/loans/${editingLoan.value._id}`, {
        method: 'PATCH',
        body: payload
      })
    } else {
      await $fetch('/api/loans', {
        method: 'POST',
        body: payload
      })
    }
    
    await fetchLoans()
    closeModal()
  } catch (error) {
    console.error('Error submitting loan:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Close modal and reset form
const closeModal = () => {
  isModalOpen.value = false
  editingLoan.value = null
  Object.assign(form, {
    amountVND: null,
    term: '',
    interestRate: null,
    borrowerId: '',
    loanDate: '',
    interestStartDate: '',
    description: ''
  })
}

// Format helpers
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN').format(value)
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

const formatTerm = (term: string) => {
  const termMap: Record<string, string> = {
    '3_MONTHS': '3 tháng',
    '6_MONTHS': '6 tháng',
    '1_YEAR': '1 năm'
  }
  return termMap[term] || term
}

const formatStatus = (status: string) => {
  const statusMap: Record<string, string> = {
    'NOT_STARTED': 'Chưa tính lãi',
    'IN_PROGRESS': 'Đang tính lãi',
    'COMPLETED': 'Đã kết thúc'
  }
  return statusMap[status] || status
}

const getStatusColor = (status: string) => {
  const colorMap: Record<string, string> = {
    'NOT_STARTED': 'yellow',
    'IN_PROGRESS': 'blue',
    'COMPLETED': 'green'
  }
  return colorMap[status] || 'gray'
}

// Calculate USDT amount
const calculateUSDT = (amountVND: number) => {
  const rate = 24500 // Tỷ giá USD/VND
  return (amountVND / rate).toFixed(2)
}

// Calculate interest to current date
const calculateInterestToDate = (loan: any) => {
  if (!loan.interestStartDate || !loan.term || !loan.amountVND || !loan.interestRate) return 0
  
  const today = new Date()
  const startDate = new Date(loan.interestStartDate)
  
  // If not started yet
  if (today < startDate) return 0
  
  // Calculate end date based on term
  let endDate = new Date(startDate)
  switch (loan.term) {
    case '3_MONTHS':
      endDate.setMonth(startDate.getMonth() + 3)
      break
    case '6_MONTHS':
      endDate.setMonth(startDate.getMonth() + 6)
      break
    case '1_YEAR':
      endDate.setFullYear(startDate.getFullYear() + 1)
      break
  }
  
  // Calculate daily interest rate (annual rate / 365 days)
  const dailyInterestRate = loan.interestRate / 100 / 365
  
  // If completed, return total interest for the entire term
  if (today > endDate) {
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    return loan.amountVND * dailyInterestRate * totalDays
  }
  
  // Calculate interest for current period
  const daysDiff = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  return loan.amountVND * dailyInterestRate * daysDiff
}

// Initial fetch
onMounted(() => {
  fetchLoans()
  refreshUsers()
})
</script> 