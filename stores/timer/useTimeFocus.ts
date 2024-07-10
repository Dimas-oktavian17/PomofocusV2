export const useFocusStore = defineStore('Focus', () => {
    const useSetting = useSettings()
    const FocusLength = computed(() => {
        const item = useSetting.value.find(item => item.id === 1)
        return item ? item.status : null
    })
    const ShortBreak = computed(() => {
        const item = useSetting.value.find(item => item.id === 2)
        return item ? item.status : null
    })
    const LongBreak = computed(() => {
        const item = useSetting.value.find(item => item.id === 3)
        return item ? item.status : null
    })
    return {
        FocusLength,
        ShortBreak,
        LongBreak
    }
})