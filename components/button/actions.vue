<script setup>
const emit = defineEmits(['settings', 'check', 'tes'])
</script>
<template>
  <section class="grid grid-cols-3 place-items-center">
    <UButton class="p-6 duration-1000 bg-red-200 text-red-950 rounded-3xl hover:bg-red-100 hover:transition-all"
      @click="$emit('settings')">
      <UIcon name="i-ph-dots-three-outline-fill" dynamic class="size-5" />
    </UButton>
    <UButton class="py-6 duration-1000 bg-red-400 px-7 text-red-950 rounded-3xl hover:bg-red-300 hover:transition-all"
      @click="$emit('check')">
      <UIcon name="i-ph-pause-fill" dynamic class="size-7" />
    </UButton>
    <UButton class="p-6 duration-1000 bg-red-200 text-red-950 rounded-3xl hover:bg-red-100 hover:transition-all"
      @click="$emit('tes')">
      <UIcon name="i-ph-fast-forward-fill" dynamic class="size-5" />
    </UButton>
  </section>
</template>

<style scoped></style>
