<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-bl-full opacity-10 transform rotate-12"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-tr-full opacity-10 transform -rotate-12"></div>

    <!-- Form content -->
    <div class="relative">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Đăng ký tài khoản</h1>
        <p class="text-gray-600">Tham gia cùng chúng tôi để trải nghiệm dịch vụ tài chính tốt nhất</p>
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
            <input
              v-model="formData.password"
              type="password"
              id="password"
              required
              :class="['w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50',
                      errors.password ? 'border-red-500' : 'border-gray-300']"
              placeholder="••••••••"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
          </div>

          <!-- Confirm Password field -->
          <div class="relative">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
              <i class="fas fa-shield-alt mr-2 text-indigo-500"></i>Xác nhận mật khẩu
            </label>
            <input
              v-model="formData.confirmPassword"
              type="password"
              id="confirmPassword"
              required
              :class="['w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50',
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300']"
              placeholder="••••••••"
            />
            <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-500">{{ errors.confirmPassword }}</p>
          </div>
        </div>

        <!-- Submit button -->
        <div class="pt-4">
          <button
            type="submit"
            :disabled="isLoading || !isFormValid"
            @click="handleSubmit"
            @mouseenter="handleHover"
            class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg 
                   transition-all duration-300 ease-in-out
                   hover:from-indigo-600 hover:to-purple-700
                   hover:shadow-lg hover:scale-[1.02]
                   active:scale-95
                   cursor-pointer
                   disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center justify-center space-x-2"
          >
            <div class="relative flex items-center space-x-2">
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <i v-if="!isLoading" class="fas fa-user-plus text-xl"></i>
                <i v-else class="fas fa-circle-notch fa-spin text-xl"></i>
              </Transition>
              <span class="relative">
                {{ isLoading ? 'Đang xử lý...' : 'Đăng ký ngay' }}
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left"
                  :class="{ 'scale-x-100': isHovered }"
                ></span>
              </span>
            </div>
          </button>
        </div>

        <!-- Error message -->
        <div v-if="errorMessage" class="text-center text-red-500 text-sm">
          {{ errorMessage }}
        </div>

        <!-- Login link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">
            Đã có tài khoản?
            <NuxtLink to="/login" class="text-indigo-600 hover:text-indigo-500 font-medium cursor-pointer">
              Đăng nhập
            </NuxtLink>
          </p>
        </div>
      </form>

      <!-- Additional features -->
      <div class="mt-8 pt-6 border-t border-gray-200">
        <h3 class="text-sm font-medium text-gray-700 mb-4">Tính năng nổi bật:</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer group">
            <i class="fas fa-shield-alt text-green-500 mr-2 group-hover:text-indigo-500 transition-colors duration-200"></i>
            Bảo mật tối đa
          </div>
          <div class="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer group">
            <i class="fas fa-bolt text-yellow-500 mr-2 group-hover:text-indigo-500 transition-colors duration-200"></i>
            Giao dịch nhanh chóng
          </div>
          <div class="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer group">
            <i class="fas fa-clock text-blue-500 mr-2 group-hover:text-indigo-500 transition-colors duration-200"></i>
            Hỗ trợ 24/7
          </div>
          <div class="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer group">
            <i class="fas fa-chart-line text-purple-500 mr-2 group-hover:text-indigo-500 transition-colors duration-200"></i>
            Báo cáo chi tiết
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

interface FormData {
  email: string
  password: string
  confirmPassword: string
}

interface FormErrors {
  email?: string
  password?: string
  confirmPassword?: string
}

interface RegisterResponse {
  user: {
    _id: string
    email: string
  }
  token: string
}

const formData = reactive<FormData>({
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive<FormErrors>({})
const errorMessage = ref('')
const isLoading = ref(false)
const isHovered = ref(false)
const toast = useCustomToast()

// Tính toán trạng thái form hợp lệ
const isFormValid = computed(() => {
  return formData.email && 
         formData.password && 
         formData.confirmPassword && 
         formData.password === formData.confirmPassword &&
         formData.password.length >= 6 &&
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
})

// Xử lý hover effect
const handleHover = () => {
  if (!isLoading.value && isFormValid.value) {
    isHovered.value = true
  }
}

// Watch các trường input để reset lỗi
watch(() => formData.email, () => {
  errors.email = ''
  errorMessage.value = ''
})

watch(() => formData.password, () => {
  errors.password = ''
  errorMessage.value = ''
})

watch(() => formData.confirmPassword, () => {
  errors.confirmPassword = ''
  errorMessage.value = ''
})

const validateForm = (): boolean => {
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  errorMessage.value = ''

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Email không hợp lệ'
    toast.showError('Lỗi xác thực', 'Email không hợp lệ')
    return false
  }

  // Validate password
  if (formData.password.length < 6) {
    errors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    toast.showError('Lỗi xác thực', 'Mật khẩu phải có ít nhất 6 ký tự')
    return false
  }

  // Validate confirm password
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Mật khẩu xác nhận không khớp'
    toast.showError('Lỗi xác thực', 'Mật khẩu xác nhận không khớp')
    return false
  }

  return true
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch<RegisterResponse>('/api/auth/register', {
      method: 'POST',
      body: {
        email: formData.email,
        password: formData.password
      }
    })

    // Lưu token vào cookie
    const token = response.token
    if (token) {
      const cookie = useCookie('auth_token')
      cookie.value = token
    }

    // Hiển thị toast thành công
    toast.showSuccess(
      'Đăng ký thành công!',
      'Chào mừng bạn đến với TechFinance'
    )

    // Chuyển hướng đến trang chủ sau khi đăng ký thành công
    await navigateTo('/')
    
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Đã có lỗi xảy ra, vui lòng thử lại'
    
    // Hiển thị toast lỗi
    toast.showError(
      'Đăng ký thất bại',
      errorMessage.value
    )
  } finally {
    isLoading.value = false
    isHovered.value = false
  }
}
</script>

<style scoped>
.form-input:focus {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 