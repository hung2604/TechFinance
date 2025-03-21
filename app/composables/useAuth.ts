export const useAuth = () => {
  const logout = () => {
    const authToken = useCookie('auth_token')
    if (authToken.value) {
      authToken.value = null
    }
    return navigateTo('/login')
  }

  return {
    logout
  }
} 