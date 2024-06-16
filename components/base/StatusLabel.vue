<script setup lang="ts">
const data = ref(true)
</script>

<template>
  <UButton @click="data = !data" size="sm"
    :class="[data ? 'text-red-900 bg-red-200 border border-red-900 border-solid rounded-full fill-red-800 hover:bg-red-100' : 'text-green-900 bg-green-200 border border-green-900 border-solid rounded-full fill-green-800 hover:bg-green-100']"
    class="duration-1000 hover:transition-all">
    <UIcon name="i-ph-brain" dynamic v-if="data" />
    <UIcon name="i-ph-coffee" dynamic v-else />
    {{ data ? 'Focus' : 'break' }}
  </UButton>
</template>