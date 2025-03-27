<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <UIcon name="i-heroicons-banknotes" class="w-8 h-8 text-primary-500" />
            <span class="ml-2 text-xl font-semibold text-gray-800 dark:text-white">TechFinance</span>
          </div>
          <div class="flex items-center space-x-4">
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-arrow-path"
              :loading="loading"
              @click="refreshData"
            >
              Làm mới
            </UButton>
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-user-circle"
            >
              {{ user?.name || 'Tài khoản' }}
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Account Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <UCard class="bg-white dark:bg-gray-800">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Tổng tài sản (USDT)</h3>
              <UIcon name="i-heroicons-wallet" class="w-5 h-5 text-primary-500" />
            </div>
          </template>
          <div class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ formatNumber(balance.total) }}
          </div>
          <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Cập nhật: {{ formatDate(lastUpdate) }}
          </div>
        </UCard>

        <UCard class="bg-white dark:bg-gray-800">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Số dư khả dụng</h3>
              <UIcon name="i-heroicons-arrow-trending-up" class="w-5 h-5 text-green-500" />
            </div>
          </template>
          <div class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ formatNumber(balance.available) }}
          </div>
          <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Có thể giao dịch
          </div>
        </UCard>

        <UCard class="bg-white dark:bg-gray-800">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Đang đóng băng</h3>
              <UIcon name="i-heroicons-lock-closed" class="w-5 h-5 text-yellow-500" />
            </div>
          </template>
          <div class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ formatNumber(balance.frozen) }}
          </div>
          <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Đang trong lệnh
          </div>
        </UCard>

        <UCard class="bg-white dark:bg-gray-800">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Lợi nhuận 24h</h3>
              <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-blue-500" />
            </div>
          </template>
          <div class="text-2xl font-bold" :class="profit24h >= 0 ? 'text-green-500' : 'text-red-500'">
            {{ formatNumber(profit24h) }}%
          </div>
          <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            So với 24h trước
          </div>
        </UCard>
      </div>

      <!-- Recent Transactions -->
      <UCard class="bg-white dark:bg-gray-800">
        <template #header>
          <div class="flex items-center justify-between">
            <UTabs
              v-model="activeTab"
              :items="[
                { label: 'Giao dịch gần đây', slot: 'transactions' },
                { label: 'Lịch sử nạp', slot: 'deposits' },
                { label: 'Thưởng Kickstarter', slot: 'kickstarter' }
              ]"
            />
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-arrow-path"
              :loading="loadingTransactions"
              @click="refreshData"
            >
              Làm mới
            </UButton>
          </div>
        </template>

        <UTabPanels v-model="activeTab">
          <UTabPanel name="transactions">
            <UTable
              :columns="columns"
              :data="transactions"
              :loading="loadingTransactions"
            >
              <template #type-data="{ row }">
                <UBadge
                  :color="row.type === 'buy' ? 'success' : 'error'"
                  :label="row.type === 'buy' ? 'Mua' : 'Bán'"
                />
              </template>

              <template #amount-data="{ row }">
                <span :class="row.type === 'buy' ? 'text-green-500' : 'text-red-500'">
                  {{ row.type === 'buy' ? '+' : '-' }}{{ formatNumber(row.amount) }}
                </span>
              </template>

              <template #price-data="{ row }">
                {{ formatNumber(row.price) }}
              </template>

              <template #total-data="{ row }">
                {{ formatNumber(row.total) }}
              </template>

              <template #time-data="{ row }">
                {{ formatDate(row.time) }}
              </template>
            </UTable>
          </UTabPanel>

          <UTabPanel name="deposits">
            <UTable
              :columns="depositColumns"
              :data="deposits"
              :loading="loadingDeposits"
            >
              <template #amount-data="{ row }">
                <span class="text-green-500">
                  +{{ formatNumber(row.amount) }}
                </span>
              </template>

              <template #status-data="{ row }">
                <UBadge
                  :color="row.status === 'SUCCESS' ? 'success' : 'warning'"
                  :label="row.status === 'SUCCESS' ? 'Thành công' : 'Đang xử lý'"
                />
              </template>

              <template #time-data="{ row }">
                {{ formatDate(row.time) }}
              </template>
            </UTable>
          </UTabPanel>

          <UTabPanel name="kickstarter">
            <UTable
              :columns="kickstarterColumns"
              :data="kickstarterRewards"
              :loading="loadingKickstarter"
            >
              <template #amount-data="{ row }">
                <span class="text-green-500">
                  +{{ formatNumber(row.amount) }}
                </span>
              </template>

              <template #time-data="{ row }">
                {{ formatDate(row.time) }}
              </template>
            </UTable>
          </UTabPanel>
        </UTabPanels>
      </UCard>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

interface Balance {
  total: number
  available: number
  frozen: number
}

interface Transaction {
  type: 'buy' | 'sell'
  symbol: string
  amount: number
  price: number
  total: number
  time: Date
}

interface Deposit {
  id: string
  coin: string
  amount: number
  network: string
  status: string
  address: string
  txId: string
  time: Date
}

interface KickstarterReward {
  id: string
  coin: string
  amount: number
  type: string
  time: Date
}

const balance = ref<Balance>({
  total: 0,
  available: 0,
  frozen: 0
})

const profit24h = ref(0)
const lastUpdate = ref(new Date())
const loading = ref(false)
const loadingTransactions = ref(false)
const transactions = ref<Transaction[]>([])

const activeTab = ref('transactions')
const loadingDeposits = ref(false)
const deposits = ref<Deposit[]>([])

const loadingKickstarter = ref(false)
const kickstarterRewards = ref<KickstarterReward[]>([])

const columns = [
  {
    id: 'type',
    key: 'type',
    label: 'Loại',
    accessorKey: 'type'
  },
  {
    id: 'symbol',
    key: 'symbol',
    label: 'Cặp giao dịch',
    accessorKey: 'symbol'
  },
  {
    id: 'amount',
    key: 'amount',
    label: 'Số lượng',
    accessorKey: 'amount'
  },
  {
    id: 'price',
    key: 'price',
    label: 'Giá',
    accessorKey: 'price'
  },
  {
    id: 'total',
    key: 'total',
    label: 'Tổng',
    accessorKey: 'total'
  },
  {
    id: 'time',
    key: 'time',
    label: 'Thời gian',
    accessorKey: 'time'
  }
]

const depositColumns = [
  {
    id: 'time',
    key: 'time',
    label: 'Thời gian',
    accessorKey: 'time'
  },
  {
    id: 'amount',
    key: 'amount',
    label: 'Số lượng',
    accessorKey: 'amount'
  },
  {
    id: 'network',
    key: 'network',
    label: 'Mạng',
    accessorKey: 'network'
  },
  {
    id: 'status',
    key: 'status',
    label: 'Trạng thái',
    accessorKey: 'status'
  },
  {
    id: 'txId',
    key: 'txId',
    label: 'Mã giao dịch',
    accessorKey: 'txId'
  }
]

const kickstarterColumns = [
  {
    id: 'time',
    key: 'time',
    label: 'Thời gian',
    accessorKey: 'time'
  },
  {
    id: 'coin',
    key: 'coin',
    label: 'Loại tiền',
    accessorKey: 'coin'
  },
  {
    id: 'amount',
    key: 'amount',
    label: 'Số lượng',
    accessorKey: 'amount'
  },
  {
    id: 'type',
    key: 'type',
    label: 'Loại thưởng',
    accessorKey: 'type'
  }
]

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const fetchBalance = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/mexc/balance')
    balance.value = response
    lastUpdate.value = new Date()
  } catch (error: any) {
    console.error('Error fetching balance:', error)
  } finally {
    loading.value = false
  }
}

const fetchTransactions = async () => {
  try {
    loadingTransactions.value = true
    const response = await $fetch('/api/mexc/transactions')
    transactions.value = response
  } catch (error: any) {
    console.error('Error fetching transactions:', error)
  } finally {
    loadingTransactions.value = false
  }
}

const fetchDeposits = async () => {
  try {
    loadingDeposits.value = true
    const response = await $fetch('/api/mexc/deposits')
    deposits.value = response
  } catch (error: any) {
    console.error('Error fetching deposits:', error)
  } finally {
    loadingDeposits.value = false
  }
}

const fetchKickstarterRewards = async () => {
  try {
    loadingKickstarter.value = true
    const response = await $fetch('/api/mexc/kickstarter')
    kickstarterRewards.value = response
  } catch (error: any) {
    console.error('Error fetching Kickstarter rewards:', error)
  } finally {
    loadingKickstarter.value = false
  }
}

const refreshData = async () => {
  await Promise.all([
    fetchBalance(),
    fetchTransactions(),
    fetchDeposits(),
    fetchKickstarterRewards()
  ])
}

// Fetch initial data
onMounted(() => {
  refreshData()
})
</script> 