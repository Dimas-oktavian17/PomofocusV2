import { useCounterStore } from '~/stores/counter/useCounter'
export const useclass = () => {
  const useCounter = useCounterStore()
  const { CounterRealtime } = storeToRefs(useCounter)
  const bgTheme = computed(() => (
    {
      'bg-red-50': CounterRealtime.value === 1,
      'bg-green-50': CounterRealtime.value === 2,
      'bg-blue-50': CounterRealtime.value === 3,
    }
  ))
  const buttonTheme = computed(() => (
    {
      'bg-red-200 text-red-950 hover:bg-red-100': CounterRealtime.value === 1,
      'bg-green-200 text-green-950 hover:bg-green-100': CounterRealtime.value === 2,
      'bg-blue-200 text-blue-950 hover:bg-blue-100': CounterRealtime.value === 3
    }
  ))
  const ButtonActionsTheme = computed(() => (
    {
      'bg-red-400 text-red-950 hover:bg-red-300': CounterRealtime.value === 1,
      'bg-green-400 text-green-950 hover:bg-green-300': CounterRealtime.value === 2,
      'bg-blue-400 text-blue-950 hover:bg-blue-300': CounterRealtime.value === 3,
    }
  ))
  const badgeTheme = computed(() => (
    {
      'text-red-900 bg-red-200  border-red-900  fill-red-800 hover:bg-red-100':
        CounterRealtime.value === 1,
      'text-green-900 bg-green-200  border-green-900  fill-green-800 hover:bg-green-100':
        CounterRealtime.value === 2,
      'text-blue-900 bg-blue-200  border-blue-900  fill-blue-800 hover:bg-blue-100':
        CounterRealtime.value === 3,
    }
  ))
  const timerTheme = computed(() => (
    {
      'text-red-950': CounterRealtime.value === 1,
      'text-green-900': CounterRealtime.value === 2,
      'text-blue-900': CounterRealtime.value === 3,
    }
  ))
  const labelTheme = computed(() => (
    {
      'text-red-900': CounterRealtime.value === 1,
      'text-green-900': CounterRealtime.value === 2,
      'text-blue-900': CounterRealtime.value === 3,
    }
  ))
  const symbolTheme = computed(() => (
    {
      'text-red-300': CounterRealtime.value === 1,
      'text-green-300': CounterRealtime.value === 2,
      'text-blue-300': CounterRealtime.value === 3,
    }
  ))
  const keyTheme = computed(() => (
    {
      'text-red-300 border-red-300': CounterRealtime.value === 1,
      'text-green-300 border-green-300': CounterRealtime.value === 2,
      'text-blue-300 border-blue-300': CounterRealtime.value === 3,
    }
  ))
  return { bgTheme, timerTheme, symbolTheme, keyTheme, labelTheme, badgeTheme, buttonTheme, ButtonActionsTheme }
}
