### UTable Rules
1. UTable không có slot #body, thay vào đó phải sử dụng slot cho từng cột theo format `{accessorKey}-cell`
2. Slot cho mỗi cột phải được đặt tên theo format `{accessorKey}-cell`
3. Khi truy cập data trong slot của cell, luôn phải lấy từ `row.original` thay vì truy cập trực tiếp từ `row`
4. Ví dụ:
```vue
<template #status-cell="{ row }">
  <UBadge
    :color="getStatusColor(row.original.status)"
    :label="getStatusLabel(row.original.status)"
  />
</template>
``` 