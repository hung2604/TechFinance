<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-bl-full opacity-10 transform rotate-12"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-tr-full opacity-10 transform -rotate-12"></div>

    <!-- Form content -->
    <div class="relative">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Đăng nhập</h1>
        <p class="text-gray-600">Chào mừng bạn trở lại với TechFinance</p>
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="space-y-4">
          <!-- Email field -->
          <div class="relative">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              <i class="fas fa-envelope mr-2 text-indigo-500"></i>Email
            </label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              required
              :class="['w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50',
                      errors.email ? 'border-red-500' : 'border-gray-300']"
              placeholder="your.email@example.com"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
          </div>

          <!-- Password field -->
          <div class="relative">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              <i class="fas fa-lock mr-2 text-indigo-500"></i>Mật khẩu
            </label>
            <div class="relative">
              <input
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                required
                :class="['w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 pr-10',
                        errors.password ? 'border-red-500' : 'border-gray-300']"
                placeholder="••••••••"
              />
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
          </div>

          <!-- Remember me and Forgot password -->
          <div class="flex items-center justify-between mt-6">
            <label class="flex items-center space-x-3">
              <input
                type="checkbox"
                v-model="rememberMe"
                class="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="text-sm text-gray-600">Ghi nhớ đăng nhập</span>
            </label>
            <NuxtLink to="/forgot-password" class="text-sm text-indigo-600 hover:text-indigo-500">
              Quên mật khẩu?
            </NuxtLink>
          </div>
        </div>

        <!-- Submit button -->
        <div class="pt-4">
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <i v-if="!isLoading" class="fas fa-sign-in-alt"></i>
            <i v-else class="fas fa-circle-notch fa-spin"></i>
            <span>{{ isLoading ? 'Đang xử lý...' : 'Đăng nhập' }}</span>
          </button>
        </div>

        <!-- Error message -->
        <div v-if="errorMessage" class="text-center text-red-500 text-sm">
          {{ errorMessage }}
        </div>

        <!-- Register link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">
            Chưa có tài khoản?
            <NuxtLink to="/register" class="text-indigo-600 hover:text-indigo-500 font-medium">
              Đăng ký ngay
            </NuxtLink>
          </p>
        </div>
      </form>

      <!-- Additional features -->
      <div class="mt-8 pt-6 border-t border-gray-200">
        <h3 class="text-sm font-medium text-gray-700 mb-4">Tính năng nổi bật:</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-shield-alt text-green-500 mr-2"></i>
            Bảo mật tối đa
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-bolt text-yellow-500 mr-2"></i>
            Giao dịch nhanh chóng
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-clock text-blue-500 mr-2"></i>
            Hỗ trợ 24/7
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-chart-line text-purple-500 mr-2"></i>
            Báo cáo chi tiết
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

const formData = reactive<FormData>({
  email: '',
  password: ''
})

const errors = reactive<FormErrors>({})
const errorMessage = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const rememberMe = ref(false)

const validateForm = (): boolean => {
  errors.email = ''
  errors.password = ''
  errorMessage.value = ''

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Email không hợp lệ'
    return false
  }

  // Validate password
  if (!formData.password) {
    errors.password = 'Vui lòng nhập mật khẩu'
    return false
  }

  return true
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: formData.email,
        password: formData.password,
        remember: rememberMe.value
      }
    })

    // Lưu token vào cookie
    const token = response.token
    if (token) {
      const cookie = useCookie('auth_token')
      cookie.value = token
    }

    // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
    await navigateTo('/')
    
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Email hoặc mật khẩu không chính xác'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.form-input:focus {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}
</style> 