<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Tổng quan</h1>
      <div class="flex gap-2">
        <UButton
          color="primary"
          icon="i-heroicons-arrow-path"
          @click="refreshData"
        >
          Làm mới
        </UButton>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Total Investment -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Tổng đầu tư</h3>
            <UIcon name="i-heroicons-banknotes" class="w-6 h-6 text-primary-500" />
          </div>
        </template>

        <div class="space-y-2">
          <div class="text-3xl font-bold">
            {{ formatNumber(totalInvestment) }} USDT
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span :class="investmentChange >= 0 ? 'text-success-500' : 'text-error-500'">
              <UIcon :name="investmentChange >= 0 ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'" />
              {{ Math.abs(investmentChange) }}%
            </span>
            <span class="text-gray-500">so với tháng trước</span>
          </div>
        </div>
      </UCard>

      <!-- Total Rewards -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Tổng phần thưởng</h3>
            <UIcon name="i-heroicons-gift" class="w-6 h-6 text-success-500" />
          </div>
        </template>

        <div class="space-y-2">
          <div class="text-3xl font-bold">
            {{ formatNumber(totalRewards) }} USDT
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span :class="rewardsChange >= 0 ? 'text-success-500' : 'text-error-500'">
              <UIcon :name="rewardsChange >= 0 ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'" />
              {{ Math.abs(rewardsChange) }}%
            </span>
            <span class="text-gray-500">so với tháng trước</span>
          </div>
        </div>
      </UCard>

      <!-- Total Loans -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Tổng khoản vay</h3>
            <UIcon name="i-heroicons-currency-dollar" class="w-6 h-6 text-warning-500" />
          </div>
        </template>

        <div class="space-y-2">
          <div class="text-3xl font-bold">
            {{ formatNumber(totalLoans) }} VNĐ
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span :class="loansChange >= 0 ? 'text-success-500' : 'text-error-500'">
              <UIcon :name="loansChange >= 0 ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'" />
              {{ Math.abs(loansChange) }}%
            </span>
            <span class="text-gray-500">so với tháng trước</span>
          </div>
        </div>
      </UCard>

      <!-- Net Profit -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Lợi nhuận ròng</h3>
            <UIcon name="i-heroicons-chart-bar" class="w-6 h-6 text-info-500" />
          </div>
        </template>

        <div class="space-y-2">
          <div class="text-3xl font-bold" :class="netProfit >= 0 ? 'text-success-500' : 'text-error-500'">
            {{ formatNumber(netProfit) }} USDT
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span :class="profitChange >= 0 ? 'text-success-500' : 'text-error-500'">
              <UIcon :name="profitChange >= 0 ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'" />
              {{ Math.abs(profitChange) }}%
            </span>
            <span class="text-gray-500">so với tháng trước</span>
          </div>
        </div>
      </UCard>
    </div>
    <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Đầu tư vs Phần thưởng</h3>
            <USelect
              v-model="chartPeriod"
              :options="[
                { label: '7 ngày', value: '7d' },
                { label: '30 ngày', value: '30d' },
                { label: '90 ngày', value: '90d' }
              ]"
              class="w-32"
            />
          </div>
        </template>

        <div class="h-80">
          <LineChart
            :data="investmentRewardsData"
            :options="{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top'
                }
              },
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => formatNumber(value) + ' USDT'
                  }
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => formatNumber(value) + ' MX'
                  }
                }
              }
            }"
          />
        </div>
      </UCard>
  </div>
</template>

<script setup lang="ts">
import { Line as LineChart, Doughnut as DoughnutChart } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

interface Transaction {
  date: string
  type: 'reward' | 'investment' | 'loan'
  description: string
  amount: number
}

// Fetch real data
const { data: stats } = await useFetch('/api/stats')
const { data: transactions } = await useFetch('/api/transactions')

const totalInvestment = computed(() => stats.value?.totalInvestment || 0)
const totalRewards = computed(() => stats.value?.totalRewards || 0)
const totalLoans = computed(() => stats.value?.totalLoans || 0)
const netProfit = computed(() => stats.value?.netProfit || 0)

const investmentChange = computed(() => stats.value?.investmentChange || 0)
const rewardsChange = computed(() => stats.value?.rewardsChange || 0)
const loansChange = computed(() => stats.value?.loansChange || 0)
const profitChange = computed(() => stats.value?.profitChange || 0)

const chartPeriod = ref('30d')
const distributionPeriod = ref('30d')

const investmentRewardsData = computed(() => ({
  labels: stats.value?.chartData?.labels || [],
  datasets: [
    {
      label: 'Số lượng coin',
      data: stats.value?.chartData?.coins || [],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      yAxisID: 'y1'
    },
    {
      label: 'Đầu tư',
      data: stats.value?.chartData?.investments || [],
      borderColor: '#22c55e',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      fill: true,
      yAxisID: 'y'
    },
    {
      label: 'Phần thưởng',
      data: stats.value?.chartData?.rewards || [],
      borderColor: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      fill: true,
      yAxisID: 'y'
    }
  ]
}))

const profitDistributionData = computed(() => ({
  labels: ['Kickstarter', 'Coin', 'Khoản vay'],
  datasets: [
    {
      data: [
        stats.value?.distribution?.kickstarter || 0,
        stats.value?.distribution?.coin || 0,
        stats.value?.distribution?.loans || 0
      ],
      backgroundColor: [
        '#3b82f6',
        '#22c55e',
        '#f59e0b'
      ]
    }
  ]
}))

const transactionColumns = [
  {
    key: 'date',
    id: 'date',
    label: 'Ngày',
    accessorKey: 'date'
  },
  {
    key: 'type',
    id: 'type',
    label: 'Loại',
    accessorKey: 'type'
  },
  {
    key: 'description',
    id: 'description',
    label: 'Mô tả',
    accessorKey: 'description'
  },
  {
    key: 'amount',
    id: 'amount',
    label: 'Số tiền',
    accessorKey: 'amount'
  }
]

const recentTransactions = computed(() => transactions.value || [])

function formatNumber(number: number) {
  return new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number)
}

function getTransactionTypeColor(type: Transaction['type']) {
  switch (type) {
    case 'reward':
      return 'success'
    case 'investment':
      return 'primary'
    case 'loan':
      return 'warning'
    default:
      return 'neutral'
  }
}

function getTransactionTypeLabel(type: Transaction['type']) {
  switch (type) {
    case 'reward':
      return 'Phần thưởng'
    case 'investment':
      return 'Đầu tư'
    case 'loan':
      return 'Khoản vay'
    default:
      return type
  }
}

async function refreshData() {
  await refreshNuxtData(['stats', 'transactions'])
}
</script>
