<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo section -->
      <div class="text-center mb-8">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="relative">
            <UIcon name="i-heroicons-banknotes" class="w-12 h-12 text-primary-500" />
            <div class="absolute -inset-1 bg-primary-500 rounded-full animate-ping opacity-20"></div>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">
            TechFinance
          </span>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">Đăng nhập</h1>
        <p class="text-gray-600 dark:text-gray-400">Chào mừng bạn trở lại với TechFinance</p>
      </div>

      <!-- Form card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-bl-full opacity-10 transform rotate-12"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-tr-full opacity-10 transform -rotate-12"></div>

        <!-- Form content -->
        <form @submit.prevent="handleSubmit" class="space-y-8 relative">
          <div class="space-y-[25px]">
            <UFormGroup label="Email" name="email" class="h-[32px]">
              <UInput
                v-model="form.email"
                type="email"
                placeholder="Nhập email"
                autocomplete="email"
                required
                class="w-full h-[46px] text-base mb-4"
              />
            </UFormGroup>

            <UFormGroup label="Mật khẩu" name="password" class="mb-0">
              <UInput
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu"
                autocomplete="current-password"
                required
                class="w-full h-[32px] text-base"
              >
                <template #trailing>
                  <UButton
                    color="neutral"
                    variant="ghost"
                    icon="i-heroicons-eye"
                    @click="showPassword = !showPassword"
                  />
                </template>
              </UInput>
            </UFormGroup>
          </div>

          <div class="flex items-center justify-between py-2">
            <UCheckbox
              v-model="form.remember"
              label="Ghi nhớ đăng nhập"
              class="text-sm"
            />
            <NuxtLink
              to="/forgot-password"
              class="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              Quên mật khẩu?
            </NuxtLink>
          </div>

          <UButton
            type="submit"
            color="primary"
            block
            :loading="loading"
            class="h-[32px] text-base font-medium"
          >
            Đăng nhập
          </UButton>

          <div class="text-center text-sm text-gray-600 dark:text-gray-400">
            Chưa có tài khoản?
            <NuxtLink
              to="/register"
              class="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              Đăng ký ngay
            </NuxtLink>
          </div>
        </form>

        <!-- Features section -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">Tính năng nổi bật:</h3>
          <div class="grid grid-cols-2 gap-6">
            <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">
              <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Bảo mật tối đa</span>
            </div>
            <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">
              <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-yellow-500 flex-shrink-0" />
              <span>Giao dịch nhanh chóng</span>
            </div>
            <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span>Hỗ trợ 24/7</span>
            </div>
            <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">
              <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-purple-500 flex-shrink-0" />
              <span>Báo cáo chi tiết</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const toast = useToast()

const form = ref({
  email: '',
  password: '',
  remember: false
})

const errors = reactive({})
const loading = ref(false)
const showPassword = ref(false)

const validateForm = (): boolean => {
  errors.email = ''
  errors.password = ''

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errors.email = 'Email không hợp lệ'
    toast.add({
      title: 'Lỗi',
      description: 'Email không hợp lệ',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
    return false
  }

  // Validate password
  if (!form.value.password) {
    errors.password = 'Vui lòng nhập mật khẩu'
    toast.add({
      title: 'Lỗi',
      description: 'Vui lòng nhập mật khẩu',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
    return false
  }

  return true
}

const handleSubmit = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: form.value
    })
    
    // Lưu token vào cookie
    const authCookie = useCookie('auth_token', {
      maxAge:  60 * 60 * 24 * 365
    })
    authCookie.value = response.token

    // Hiển thị thông báo thành công
    toast.add({
      title: 'Thành công',
      description: 'Đăng nhập thành công',
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })

    // Chuyển hướng về trang chủ
    navigateTo('/')
  } catch (error: any) {
    toast.add({
      title: 'Lỗi',
      description: error.data?.message || 'Email hoặc mật khẩu không chính xác',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form-input:focus {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}
</style> 