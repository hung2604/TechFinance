<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-indigo-600">
              TechFinance
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="handleLogout" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
              <i class="fas fa-sign-out-alt mr-2"></i>
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

const handleLogout = async () => {
  // Xóa token
  const cookie = useCookie('auth_token')
  cookie.value = null
  
  // Chuyển hướng về trang đăng nhập
  await navigateTo('/login')
}
</script> 