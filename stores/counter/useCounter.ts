export const useCounterStore = defineStore('counter', () => {
    const counter = ref(1)
    return { counter }
})