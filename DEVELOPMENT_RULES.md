# Quy tắc Phát triển

## Components

### UTable
1. Columns phải có trường `id` khi sử dụng non-string header
```typescript
const columns = [
  {
    key: 'username',
    label: 'Tên đăng nhập',
    sortable: true,
    id: 'username'  // Bắt buộc phải có
  }
]
```

### USidebar
1. Các link trong menu phải sử dụng `to` thay vì `path`
```typescript
const menuItems = [
  {
    label: 'Trang chủ',
    to: '/',        // Sử dụng 'to' thay vì 'path'
    icon: 'i-heroicons-home'
  }
]
```

## TypeScript

### Cookie
1. Khi sử dụng `useCookie`, cần truy cập giá trị thông qua `.value`
```typescript
const cookie = useCookie('name')
cookie.value = 'new value'  // Đúng
cookie = 'new value'        // Sai
```

## Styling
1. Không sử dụng `@apply` trong các style rules, thay vào đó sử dụng classes trực tiếp trong template
```vue
<!-- Đúng -->
<div class="fixed top-0 left-0 z-50">

<!-- Sai -->
<style>
.my-class {
  @apply fixed top-0 left-0 z-50;
}
</style>
```

## API Calls
1. Luôn xử lý loading state
2. Luôn có try-catch để xử lý lỗi
```typescript
const fetchData = async () => {
  try {
    isLoading.value = true
    const response = await $fetch('/api/data')
    // xử lý response
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
```

## Forms
1. Luôn có validation trước khi submit
2. Hiển thị loading state khi đang submit
3. Reset form sau khi submit thành công
4. Đóng modal/popup sau khi submit thành công

## Security
1. Không hard-code API keys hoặc credentials
2. Sử dụng environment variables cho các thông tin nhạy cảm
3. Validate dữ liệu ở cả client và server side

## Performance
1. Sử dụng lazy loading cho các components lớn
2. Tối ưu hóa các API calls để tránh gọi không cần thiết
3. Implement caching khi cần thiết

## Git
1. Commit message phải rõ ràng và mô tả đúng những thay đổi
2. Tách các features thành các branch riêng
3. Code phải pass linter trước khi commit

---

*Document này sẽ được cập nhật thường xuyên khi phát hiện thêm các rules mới hoặc gặp các vấn đề cần lưu ý.* 