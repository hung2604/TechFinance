<template>
  <div>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <UFormGroup label="Mật khẩu mới" name="password">
        <UInput
          v-model="form.password"
          type="password"
          placeholder="Nhập mật khẩu mới"
          autocomplete="new-password"
          required
        />
      </UFormGroup>

      <UFormGroup label="Xác nhận mật khẩu" name="confirmPassword">
        <UInput
          v-model="form.confirmPassword"
          type="password"
          placeholder="Nhập lại mật khẩu mới"
          autocomplete="new-password"
          required
        />
      </UFormGroup>

      <UButton
        type="submit"
        color="primary"
        block
        :loading="loading"
      >
        Đặt lại mật khẩu
      </UButton>

      <div class="text-center text-sm text-gray-600 dark:text-gray-400">
        <NuxtLink
          to="/login"
          class="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
        >
          Quay lại đăng nhập
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const route = useRoute()
const loading = ref(false)
const form = ref({
  password: '',
  confirmPassword: ''
})

const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    return
  }

  loading.value = true
  try {
    await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: {
        token: route.query.token,
        password: form.value.password
      }
    })
    
    // Chuyển hướng về trang login
    navigateTo('/login')
  } catch (error: any) {
    console.error('Reset password error:', error)
  } finally {
    loading.value = false
  }
}
</script> 