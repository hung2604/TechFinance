# Important Rules to Follow

## Modal Components
1. Always use `v-model:open` for UModal components
2. Example: `<UModal v-model:open="showModal">`
3. This is a critical rule that must be followed for all modals in this project
4. UModal must have a body slot to display content:
   ```vue
   <UModal v-model:open="showModal">
     <UCard>
       <template #header>
         <h3>Modal Title</h3>
       </template>
       <template #body>
         <!-- Modal content goes here -->
       </template>
       <template #footer>
         <UButton @click="showModal = false">Close</UButton>
       </template>
     </UCard>
   </UModal>
   ```

## Table Components
1. Always use proper typing for table columns and data
2. Use `as const` for columns array to ensure type safety
3. Handle row data types correctly in table templates
4. UTable columns must follow this structure:
   ```typescript
   {
     key: string,      // Unique identifier for the column
     id: string,       // Same as key, required for type safety
     header: string,   // Display label (use header instead of label)
     accessorKey: string // Property name in the data object
   }
   ```
5. Example:
   ```typescript
   const columns = [
     {
       key: 'projectId',
       id: 'projectId',
       header: 'ID',
       accessorKey: 'projectId'
     }
   ] as const
   ```
6. Column slots must follow the naming convention: `{accessorKey}-cell`
   ```vue
   <UTable :columns="columns" :rows="rows">
     <template #status-cell="{ row }">
       <UBadge :color="getStatusColor(row.status)" :label="getStatusLabel(row.status)" />
     </template>
   </UTable>
   ```

## Color Usage
1. Use predefined color values from Nuxt UI:
   - primary
   - secondary
   - success
   - info
   - warning
   - error
   - neutral
2. Do not use custom color values like 'green' or 'gray'

## Type Safety
1. Always define proper interfaces for data structures
2. Use proper type assertions when working with API responses
3. Handle null/undefined cases appropriately

## Component Structure
1. Follow the standard layout pattern:
   - Header with title and actions
   - Main content area
   - Footer with pagination if needed
2. Use proper slot naming conventions
3. Keep components focused and single-responsibility

## API Integration
1. Always handle API errors appropriately
2. Use proper loading states
3. Implement proper data refresh mechanisms 