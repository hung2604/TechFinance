<template>
  <div class="space-y-6">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <UIcon name="i-heroicons-banknotes" class="w-6 h-6 text-primary-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Tổng doanh thu</div>
            <div class="text-xl font-semibold">2.5 tỷ VND</div>
          </div>
        </div>
      </UCard>
      
      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
            <UIcon name="i-heroicons-arrow-trending-up" class="w-6 h-6 text-green-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Gói vay thành công</div>
            <div class="text-xl font-semibold">324 gói</div>
          </div>
        </div>
      </UCard>
      
      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
            <UIcon name="i-heroicons-clock" class="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Đang xử lý</div>
            <div class="text-xl font-semibold">45 gói</div>
          </div>
        </div>
      </UCard>
      
      <UCard>
        <div class="flex items-center gap-4">
          <div class="p-3 bg-red-100 dark:bg-red-900 rounded-xl">
            <UIcon name="i-heroicons-x-circle" class="w-6 h-6 text-red-500" />
          </div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Từ chối</div>
            <div class="text-xl font-semibold">12 gói</div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Line Chart -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Xu hướng doanh thu</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal"
            />
          </div>
        </template>
        <div class="h-80">
          <Line :data="revenueData" :options="lineOptions" />
        </div>
      </UCard>

      <!-- Bar Chart -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Số lượng gói vay theo tháng</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal"
            />
          </div>
        </template>
        <div class="h-80">
          <Bar :data="loanData" :options="barOptions" />
        </div>
      </UCard>

      <!-- Pie Chart -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Phân bổ loại gói vay</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal"
            />
          </div>
        </template>
        <div class="h-80">
          <Pie :data="distributionData" :options="pieOptions" />
        </div>
      </UCard>

      <!-- Doughnut Chart -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Tỷ lệ thành công</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal"
            />
          </div>
        </template>
        <div class="h-80">
          <Doughnut :data="successRateData" :options="doughnutOptions" />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Line, Bar, Pie, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

// Line Chart Data
const revenueData = {
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  datasets: [
    {
      label: 'Doanh thu (tỷ VND)',
      data: [1.2, 1.5, 1.8, 2.1, 1.9, 2.3, 2.5, 2.8, 2.6, 3.0, 3.2, 3.5],
      borderColor: '#3B82F6',
      backgroundColor: '#3B82F6',
      tension: 0.4
    }
  ]
}

// Bar Chart Data
const loanData = {
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  datasets: [
    {
      label: 'Số lượng gói vay',
      data: [45, 52, 48, 58, 63, 70, 75, 82, 88, 92, 95, 100],
      backgroundColor: '#10B981'
    }
  ]
}

// Pie Chart Data
const distributionData = {
  labels: ['Vay mua nhà', 'Vay kinh doanh', 'Vay tiêu dùng', 'Vay xe'],
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
    }
  ]
}

// Doughnut Chart Data
const successRateData = {
  labels: ['Thành công', 'Đang xử lý', 'Từ chối'],
  datasets: [
    {
      data: [75, 15, 10],
      backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
    }
  ]
}

// Chart Options
const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
