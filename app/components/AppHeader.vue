<template>
  <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-800 dark:text-white">
              TechFinance
            </NuxtLink>
          </div>

          <!-- Navigation -->
          <nav class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium"
              :class="[
                $route.path === item.href
                  ? 'border-primary-500 text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Right side -->
        <div class="flex items-center">
          <!-- User menu -->
          <UDropdown
            :items="userMenuItems"
            :popper="{ placement: 'bottom-end' }"
          >
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-user-circle"
            >
              {{ user?.name || 'Tài khoản' }}
            </UButton>
          </UDropdown>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <UModal v-model="isMobileMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[
            $route.path === item.href
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </UModal>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)
const user = ref<any>(null)

// Fetch user data
const { data: userData } = useFetch('/api/users/me')
watch(userData, (newValue: any) => {
  user.value = newValue
}, { immediate: true })

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Quản lý vay', href: '/loan-packages' },
  { name: 'Quản lý coin', href: '/coin-history' },
  { name: 'Quản lý thành viên', href: '/users' }
]

// Handle logout
const handleLogout = async () => {
  console.log('Logging out...')
  try {
    const response = await $fetch('/api/auth/logout', {
      method: 'POST'
    })
    console.log('Logout response:', response)
    user.value = null
    navigateTo('/login')
  } catch (error) {
    console.error('Error logging out:', error)
  }
}

const userMenuItems = [
  [
    {
      label: 'Thông tin tài khoản',
      icon: 'i-heroicons-user',
      to: '/profile'
    },
    {
      label: 'Đổi mật khẩu',
      icon: 'i-heroicons-key',
      to: '/change-password'
    },
    {
      label: 'Đăng xuất',
      icon: 'i-heroicons-arrow-right-on-rectangle',
      click: () => {
        console.log('Menu item clicked')
        handleLogout()
      }
    }
  ]
]
</script> 