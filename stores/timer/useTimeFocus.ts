const useSetting = useSettings()
export const useFocusStore = defineStore('Focus', () => {
    const FocusLength = computed(() => useSetting.value[0].status)
    const ShortBreak = computed(() => useSetting.value[1].status)
    const LongBreak = computed(() => useSetting.value[2].status)
    return {
        FocusLength,
        ShortBreak,
        LongBreak
    }
})