export const useModal = () => {
  const isOpen = ref(false)
  const currentData = ref<any>(null)

  const open = (data: any = null) => {
    currentData.value = data
    isOpen.value = true
  }

  const close = () => {
    currentData.value = null
    isOpen.value = false
  }

  return {
    isOpen,
    currentData,
    open,
    close
  }
} 