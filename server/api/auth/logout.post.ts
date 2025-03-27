export default defineEventHandler(async (event) => {
  try {
    // Clear the auth token cookie
    setCookie(event, 'auth_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0 // This will delete the cookie
    })
    
    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Error logging out'
    })
  }
}) 