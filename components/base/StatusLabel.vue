<script setup>
import { useclass } from '~/composables/style/class';
import { useCounterStore } from '~/stores/counter/useCounter';
const useCounter = useCounterStore()
const { CounterRealtime } = storeToRefs(useCounter)
const { badgeTheme } = useclass()
</script>

<template>
  <UBadge :class="badgeTheme" class="duration-1000 border border-solid rounded-full cursor-pointer hover:transition-all"
    size="lg">
    <UIcon v-if="!CounterRealtime === 1" class="mr-2" name="i-ph-coffee" dynamic />
    <UIcon class="mr-2" name="i-ph-brain" dynamic />
    {{ CounterRealtime === 1 ? 'Focus' : CounterRealtime === 2 ? 'Short Break' : 'Long Break' }}
  </UBadge>
</template>