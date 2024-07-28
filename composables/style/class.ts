import { useCounterStore } from '~/stores/counter/useCounter'
export const useclass = () => {
  const useCounter = useCounterStore()
  const { CounterRealtime } = storeToRefs(useCounter)
  const bgTheme = computed(() => (
    {
      'bg-red-50 dark:bg-focus-dark': CounterRealtime.value === 1,
      'bg-green-50 dark:bg-short-dark': CounterRealtime.value === 2,
      'bg-blue-50 dark:bg-long-dark': CounterRealtime.value === 3,
    }
  ))
  const buttonTheme = computed(() => (
    {
      'bg-red-200 text-red-950 hover:bg-red-100 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800': CounterRealtime.value === 1,
      'bg-green-200 text-green-950 hover:bg-green-100 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800': CounterRealtime.value === 2,
      'bg-blue-200 text-blue-950 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800': CounterRealtime.value === 3
    }
  ))
  const ButtonActionsTheme = computed(() => (
    {
      'bg-red-400 text-red-950 hover:bg-red-300 dark:bg-red-700 dark:text-red-50 dark:hover:bg-red-600': CounterRealtime.value === 1,
      'bg-green-400 text-green-950 hover:bg-green-300 dark:bg-green-700 dark:text-green-50 dark:hover:bg-green-600': CounterRealtime.value === 2,
      'bg-blue-400 text-blue-950 hover:bg-blue-300 dark:bg-blue-700 dark:text-blue-50 dark:hover:bg-blue-600': CounterRealtime.value === 3,
    }
  ))
  const badgeTheme = computed(() => (
    {
      'text-red-900 bg-red-200 border-red-900 fill-red-800 hover:bg-red-100 dark:hover:bg-red-800 dark:bg-red-900 dark:border-red-100 dark:text-red-50':
        CounterRealtime.value === 1,
      'text-green-900 bg-green-200 border-green-900  fill-green-800 hover:bg-green-100 dark:hover:bg-green-800  dark:border-green-100 dark:bg-green-900  dark:text-green-50':
        CounterRealtime.value === 2,
      'text-blue-900 bg-blue-200  border-blue-900  fill-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800 dark:border-blue-100 dark:text-blue-50 dark:bg-blue-900':
        CounterRealtime.value === 3,
    }
  ))
  const timerTheme = computed(() => (
    {
      'text-red-950 dark:text-red-50 dark:bg-transparent': CounterRealtime.value === 1,
      'text-green-900 dark:text-green-50 dark:bg-transparent': CounterRealtime.value === 2,
      'text-blue-900 dark:text-blue-50 dark:bg-transparent': CounterRealtime.value === 3,
    }
  ))
  const labelTheme = computed(() => (
    {
      'text-red-900 dark:text-red-50 dark:bg-transparent': CounterRealtime.value === 1,
      'text-green-900 dark:text-green-50 dark:bg-transparent': CounterRealtime.value === 2,
      'text-blue-900 dark:text-blue-50 dark:bg-transparent': CounterRealtime.value === 3,
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
