<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <div 
      class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-50 shadow-lg"
    >
      <!-- Logo section -->
      <div class="flex items-center h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-500/10 to-transparent">
        <div class="flex items-center gap-3">
          <div class="relative">
            <UIcon name="i-heroicons-banknotes" class="w-8 h-8 text-primary-500" />
            <div class="absolute -inset-1 bg-primary-500 rounded-full animate-ping opacity-20"></div>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">
            TechFinance
          </span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-1">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="block group relative"
        >
          <div
            :class="[
              'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300',
              'hover:bg-gray-100 dark:hover:bg-gray-700/50',
              $route.path === item.path 
                ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-500 dark:text-primary-400 shadow-sm'
                : 'text-gray-700 dark:text-gray-300'
            ]"
          >
            <div class="relative">
              <UIcon 
                :name="item.icon" 
                class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
              />
              <div 
                v-if="$route.path === item.path"
                class="absolute -inset-1 bg-primary-500 rounded-full animate-ping opacity-20"
              ></div>
            </div>
            
            <span class="font-medium">{{ item.label }}</span>
            
            <!-- Active indicator -->
            <div 
              v-if="$route.path === item.path"
              class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 animate-pulse"></div>
            </div>

            <!-- Hover effect -->
            <div
              class="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              :class="$route.path === item.path ? 'bg-primary-500/5' : 'bg-gray-500/5'"
            ></div>
          </div>
        </NuxtLink>
      </nav>

      <!-- Bottom section -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-b from-transparent to-white dark:to-gray-800">
        <UButton
          color="gray"
          variant="ghost"
          class="w-full justify-start gap-2 group hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-xl px-4 py-3"
          @click="toggleDark"
        >
          <div class="relative">
            <UIcon 
              :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
              class="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
            />
          </div>
          <span class="font-medium">{{ isDark ? 'Chế độ tối' : 'Chế độ sáng' }}</span>
        </UButton>
      </div>
    </div>

    <!-- Main content -->
    <div class="pl-64 min-h-screen">
      <!-- Header -->
      <header class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 flex items-center justify-between sticky top-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ currentPageTitle }}
        </h1>
        
        <div class="flex items-center gap-4">
          <UButton
            color="gray"
            variant="ghost"
            class="relative group"
          >
            <UIcon name="i-heroicons-bell" class="w-5 h-5" />
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </UButton>

          <UDropdownMenu
            :items="userMenuItems"
            :popper="{ placement: 'bottom-end' }"
          >
            <UButton
              color="gray"
              variant="ghost"
              class="gap-2 group"
            >
              <UAvatar
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                size="sm"
                class="transition-transform duration-300 group-hover:scale-110"
              />
              <span>Admin</span>
              <UIcon 
                name="i-heroicons-chevron-down" 
                class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
              />
            </UButton>
          </UDropdownMenu>
        </div>
      </header>

      <!-- Page content -->
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const menuItems = [
  {
    label: 'Tổng quan',
    path: '/',
    icon: 'i-heroicons-home'
  },
  {
    label: 'Quản lý người dùng',
    path: '/users',
    icon: 'i-heroicons-users'
  },
  {
    label: 'Lịch sử mua coin',
    path: '/coin-history',
    icon: 'i-heroicons-currency-dollar'
  },
  {
    label: 'Quản lý khoản vay',
    path: '/loan-packages',
    icon: 'i-heroicons-banknotes'
  },
  {
    label: 'Kickstarter',
    path: '/kickstarter',
    icon: 'i-heroicons-rocket-launch'
  }
]

const userMenuItems = [
  [
    {
      label: 'Admin',
      icon: 'i-heroicons-user-circle',
      disabled: true
    }
  ],
  [
    {
      label: 'Cài đặt',
      icon: 'i-heroicons-cog-6-tooth',
      to: '/settings'
    },
    {
      label: 'Đăng xuất',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      onSelect: async () => {
        try {
          console.log('Logging out...')
          await $fetch('/api/auth/logout', {
            method: 'POST'
          })
          console.log('Logout successful')
          const authCookie = useCookie<string | null>('auth_token')
          authCookie.value = null
          navigateTo('/login')
        } catch (error) {
          console.error('Error logging out:', error)
        }
      }
    }
  ]
]

const route = useRoute()
const currentPageTitle = computed(() => {
  const currentItem = menuItems.find(item => item.path === route.path)
  return currentItem?.label || 'Tổng quan'
})
</script>

<style>
/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8);
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.5);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background-color: rgba(75, 85, 99, 0.8);
}

/* Menu hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group:hover .group-hover\:rotate-180 {
  transform: rotate(180deg);
}
</style> 