export const useCounterStore = defineStore('counter', () => {
    const counter = ref<number>(1)
    const CounterRealtime = computed(() => counter.value)
    const CountTheme = () => counter.value === 4 ? counter.value = 1 : counter.value
    return { counter, CountTheme, CounterRealtime }
})