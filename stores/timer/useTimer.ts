export const useTimerStore = defineStore('Timer', () => {
    const { counter, reset, pause, resume } = useInterval(1000, { controls: true })
    const TimerStatus = ref<boolean>(false);
    const TimerCounter = computed(() => counter.value)
    const TimerReset = () => {
    }
    const TimerPaused = () => TimerStatus.value = false
    const TimerResumed = () => TimerStatus.value = true
    const TimerStarted = () => TimerStatus.value === false ? pause() : resume()
    return { TimerStarted, TimerPaused, TimerResumed, TimerCounter, TimerReset, TimerStatus, reset, pause, resume }
})