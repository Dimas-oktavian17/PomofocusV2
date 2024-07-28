export const useCounterStore = defineStore('counter', () => {
    const counterTheme = ref<number>(1)
    const counterPomo = ref<number>(1)
    const counterShortBreak = ref<number>(1)
    const counterLongBreak = ref<number>(1)
    const CounterRealtime = computed(() => counterTheme.value)
    const CounterPomofocus = computed(() => counterPomo.value)
    const CountTheme = () => counterTheme.value === 4 ? counterTheme.value = 1 : counterTheme.value
    return { counterLongBreak, counterShortBreak, counterTheme, counterPomo, CountTheme, CounterRealtime, CounterPomofocus }
})