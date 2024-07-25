<script setup>
import { useTimerStore } from '~/stores/timer/useTimer';
import { useclass } from '~/composables/style/class';
defineEmits(['settings', 'paused', 'resumed', 'next'])
const useTimer = useTimerStore()
const { buttonTheme, ButtonActionsTheme } = useclass()
</script>
<template>
  <section class="grid grid-cols-3 place-items-center">
    <UButton :class="buttonTheme" class="p-6 duration-1000 rounded-3xl hover:transition-all" @click="$emit('settings')">
      <UIcon name="i-ph-dots-three-outline-fill" dynamic class="size-5" />
    </UButton>
    <UButton v-if="!useTimer.TimerStatus" :class="ButtonActionsTheme"
      class="py-6 duration-1000 px-7 rounded-3xl hover:transition-all" @click="$emit('resumed')">
      <UIcon name="i-ph-play-fill" dynamic class="size-7" />
    </UButton>
    <UButton v-else :class="ButtonActionsTheme" class="py-6 duration-1000 px-7 rounded-3xl hover:transition-all"
      @click="$emit('paused')">
      <UIcon name="i-ph-pause-fill" dynamic class="size-7" />
    </UButton>
    <UButton :class="buttonTheme" class="p-6 duration-1000 rounded-3xl hover:transition-all" @click="$emit('next')">
      <UIcon name="i-ph-fast-forward-fill" dynamic class="size-5" />
    </UButton>
  </section>
</template>