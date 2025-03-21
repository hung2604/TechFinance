
export const useCustomToast = () => {
  const toast = useToast()

  const showSuccess = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-heroicons-check-circle',
      color: 'success',
      duration: 3000,
      close: true
    })
  }

  const showError = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-heroicons-x-circle',
      color: 'error',
      duration: 5000,
    })
  }

  const showWarning = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-heroicons-exclamation-triangle',
      color: 'warning',
      duration: 4000,
    })
  }

  const showInfo = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-heroicons-information-circle',
      color: 'info',
      duration: 3000,
      close: true
    })
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
} 