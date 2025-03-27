<template #default>
  <UButton
    to="/"
    color="gray"
    variant="ghost"
    class="w-full justify-start"
    :ui="{ rounded: 'rounded-xl' }"
  >
    <template #leading>
      <UIcon name="i-heroicons-home" />
    </template>
    Trang chủ
  </UButton>

  <UButton
    to="/kickstarter"
    color="gray"
    variant="ghost"
    class="w-full justify-start"
    :ui="{ rounded: 'rounded-xl' }"
  >
    <template #leading>
      <UIcon name="i-heroicons-rocket-launch" />
    </template>
    Kickstarter
  </UButton>
</template> 