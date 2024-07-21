import { sounds } from '~/composables/utility/sounds';
import { useFocusStore } from './useTimeFocus';

export const useTimerStore = defineStore('Timer', () => {
    const { counter, reset, pause, resume } = useInterval(1000, { controls: true })
    const sound = sounds()
    const useFocusStores = useFocusStore()
    const TimerStatus = ref<boolean>(false);
    const TimerCounter = computed(() => counter.value)
    const TimerReset = () => {
    }
    const TimerPaused = () => TimerStatus.value = false
    const TimerResumed = () => TimerStatus.value = true
    const TimerStarted = () => TimerStatus.value === false ? pause() : resume()
    // Timer logic
    const TimerNotifications = () => {
        return convertSecondsToMinutes(useFocusStores.FocusLength * 60) === convertSecondsToMinutes(counter.value) ? sound.playSound('/Let.mp3') : console.log('tex');
    }
    return { TimerNotifications, TimerStarted, TimerPaused, TimerResumed, TimerCounter, TimerReset, TimerStatus, reset, pause, resume }
})