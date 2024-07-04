<script setup>
import { useTimerStore } from '~/stores/timer/useTimer';
defineEmits(['settings', 'paused', 'resumed', 'next'])
const useTimer = useTimerStore()
</script>
<template>
  <section class="grid grid-cols-3 place-items-center">
    <UButton class="p-6 duration-1000 bg-red-200 text-red-950 rounded-3xl hover:bg-red-100 hover:transition-all"
      @click="$emit('settings')">
      <UIcon name="i-ph-dots-three-outline-fill" dynamic class="size-5" />
    </UButton>
    <UButton v-if="!useTimer.TimerStatus"
      class="py-6 duration-1000 bg-red-400 px-7 text-red-950 rounded-3xl hover:bg-red-300 hover:transition-all"
      @click="$emit('resumed')">
      <UIcon name="i-ph-play-fill" dynamic class="size-7" />
    </UButton>
    <UButton v-else
      class="py-6 duration-1000 bg-red-400 px-7 text-red-950 rounded-3xl hover:bg-red-300 hover:transition-all"
      @click="$emit('paused')">
      <UIcon name="i-ph-pause-fill" dynamic class="size-7" />
    </UButton>
    <UButton class="p-6 duration-1000 bg-red-200 text-red-950 rounded-3xl hover:bg-red-100 hover:transition-all"
      @click="$emit('next')">
      <UIcon name="i-ph-fast-forward-fill" dynamic class="size-5" />
    </UButton>
  </section>
</template>

<style scoped></style>
