<script setup lang="ts">
const data = ref(true)
</script>

<template>
  <UBadge
    :class="[data ? 'text-red-900 bg-red-200 border border-red-900 border-solid rounded-full fill-red-800 hover:bg-red-100' : 'text-green-900 bg-green-200 border border-green-900 border-solid rounded-full fill-green-800 hover:bg-green-100']"
    class="duration-1000 cursor-pointer hover:transition-all" size="lg">
    <UIcon v-if="data" class="mr-2" name="i-ph-brain" dynamic />
    <UIcon v-else class="mr-2" name="i-ph-coffee" dynamic />
    {{ data ? 'Focus' : 'break' }}
  </UBadge>
</template>