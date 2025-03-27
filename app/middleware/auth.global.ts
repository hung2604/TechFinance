export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('auth_token')
  const publicPages = ['/login', '/register', '/forgot-password', '/reset-password']
  
  // Nếu đã đăng nhập và cố truy cập trang login/register
  if (token.value && publicPages.includes(to.path)) {
    return navigateTo('/')
  }
  
  // Nếu chưa đăng nhập và cố truy cập trang yêu cầu xác thực
  if (!token.value && !publicPages.includes(to.path)) {
    return navigateTo('/login')
  }
}) 