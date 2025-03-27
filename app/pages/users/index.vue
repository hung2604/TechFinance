<template>
  <div>
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Quản lý người dùng</h2>
          <UButton
            icon="i-heroicons-plus"
            color="primary"
            @click="isModalOpen = true"
          >
            Thêm người dùng
          </UButton>
        </div>
      </template>

      <!-- Users table -->
       <template #default>
        <UTable
        :data="users"
        :columns="columns"
        :loading="isLoading"
      >
        <template #name-cell="{ row }">
          {{ row.original.name }}
        </template>

        <template #email-cell="{ row }">
          {{ row.original.email }}
        </template>

        <template #role-cell="{ row }">
          <UBadge
            :color="row.original.role === 'ADMIN' ? 'red' : 'blue'"
            variant="subtle"
            size="sm"
          >
            {{ row.original.role || 'USER' }}
          </UBadge>
        </template>
        <template #actions-cell="{ row }">
          <div class="flex items-center gap-2">
            <UButton
              color="primary"
              variant="ghost"
              icon="i-heroicons-pencil-square"
              size="xs"
              @click="editUser(row.original)"
            />
            <UButton
                color="red"
                variant="ghost"
                icon="i-heroicons-trash"
                size="xs"
                :loading="isDeleting"
                  @click="deleteUser(row.original._id)"
              />
          </div>
        </template>
      </UTable>
       </template>
     
    </UCard>

    <!-- Add/Edit Modal -->
    <UModal
      v-model:open="isModalOpen"
      prevent-close
    >
      <template #header>
        <div class="text-xl font-semibold">
          {{ editingUser ? 'Cập nhật người dùng' : 'Thêm người dùng mới' }}
        </div>
      </template>

      <template #body>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-2 gap-6">
            <!-- Name -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Tên thành viên <span class="text-red-500">*</span>
              </label>
              <UInput
                v-model="form.name"
                placeholder="Nhập tên thành viên"
                :ui="{ 
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  padding: 'pl-4 pr-4',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              />
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email <span class="text-red-500">*</span>
              </label>
              <UInput
                v-model="form.email"
                type="email"
                placeholder="Nhập địa chỉ email"
                :ui="{ 
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  padding: 'pl-4 pr-4',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              />
            </div>

            <!-- Password -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Mật khẩu <template v-if="!editingUser"><span class="text-red-500">*</span></template>
              </label>
              <UInput
                v-model="form.password"
                type="password"
                placeholder="Nhập mật khẩu"
                :ui="{ 
                  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input',
                  padding: 'pl-4 pr-4',
                  inner: 'relative block w-full rounded-md h-[38px]'
                }"
              />
              <div v-if="editingUser" class="text-xs text-gray-500">
                Để trống nếu không muốn thay đổi mật khẩu
              </div>
            </div>

            <!-- Role -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Vai trò <span class="text-red-500">*</span>
              </label>
              <USelect
                v-model="form.role"
                :items="roleOptions"
                placeholder="Chọn vai trò"
                :ui="{
                  select: {
                    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select',
                    inner: 'relative block w-full rounded-md h-[38px]'
                  }
                }"
              />
            </div>
          </div>
        </form>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3">
          <UButton
            color="gray"
            variant="soft"
            @click="closeModal"
          >
            Hủy
          </UButton>
          <UButton
            color="primary"
            :loading="isSubmitting"
            @click="handleSubmit"
          >
            {{ editingUser ? 'Cập nhật' : 'Thêm mới' }}
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)
const isLoading = ref(true)
const isSubmitting = ref(false)
const isDeleting = ref(false)
const users = ref([])
const editingUser = ref<any>(null)

const form = reactive({
  name: '',
  email: '',
  password: '',
  role: ''
})

const roleOptions = [
  { label: 'Admin', value: 'ADMIN' },
  { label: 'User', value: 'USER' }
]

const columns = [
  {
    accessorKey: 'name',
    header: 'Tên thành viên',
    sortable: true,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    sortable: true,
  },
  {
    accessorKey: 'role',
    header: 'Vai trò',
  },
  {
    accessorKey: 'actions',
    header: 'Thao tác',
  }
]

// Fetch users
const { data: usersList, refresh: refreshUsers } = useFetch<any[]>('/api/users')
watch(usersList, (newValue: any[] | null) => {
  users.value = newValue || []
  isLoading.value = false
}, { immediate: true })

const fetchUsers = async () => {
  try {
    isLoading.value = true
    await refreshUsers()
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    isLoading.value = false
  }
}

// Edit user
const editUser = (user: any) => {
  editingUser.value = user
  Object.assign(form, {
    name: user.name,
    email: user.email,
    role: user.role || 'USER',
    password: ''
  })
  isModalOpen.value = true
}

// Delete user
const deleteUser = async (id: string) => {
  try {
    isDeleting.value = true
    await $fetch(`/api/users/${id}`, {
      method: 'DELETE'
    })
    await fetchUsers()
    closePopover()
  } catch (error) {
    console.error('Error deleting user:', error)
  } finally {
    isDeleting.value = false
  }
}

// Submit form
const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    const payload = { ...form }
    
    // Remove password if empty when editing
    if (editingUser.value && !payload.password) {
      delete payload.password
    }

    if (editingUser.value) {
      await $fetch(`/api/users/${editingUser.value._id}`, {
        method: 'PATCH',
        body: payload
      })
    } else {
      await $fetch('/api/users', {
        method: 'POST',
        body: payload
      })
    }
    
    await fetchUsers()
    closeModal()
  } catch (error) {
    console.error('Error submitting user:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Close modal and reset form
const closeModal = () => {
  isModalOpen.value = false
  editingUser.value = null
  Object.assign(form, {
    name: '',
    email: '',
    password: '',
    role: ''
  })
}

// Close popover
const closePopover = () => {
  const popover = document.querySelector('.u-popover') as any
  if (popover?.close) popover.close()
}

// Initial fetch
onMounted(() => {
  fetchUsers()
})
</script> 