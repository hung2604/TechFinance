<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/chart.js',
      defer: true
    }
  ]
})

</script> 