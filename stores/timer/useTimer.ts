import { sounds } from '~/composables/utility/sounds';
import { useCounterStore } from '../counter/useCounter';
// import { useFocusStore } from './useTimeFocus';

export const useTimerStore = defineStore('Timer', () => {
    const { counter, reset, pause, resume } = useInterval(1000, { controls: true })
    const sound = sounds()
    const CounterStore = useCounterStore()
    const { counterPomo, counterTheme, counterShortBreak, counterLongBreak } = storeToRefs(CounterStore)
    // const useFocusStores = useFocusStore()
    // ? Logic Pomofocus until break
    const LogicPomofocus = (UntilBreak: number, SoundsToggle: boolean, AutoResumedTimer: boolean) => {
        // ? Checking condition based on pomo until break && soundsToggle 
        if (UntilBreak === counterPomo.value && SoundsToggle) {
            // ? move value to long break theme && set pomo value to default value
            if (!AutoResumedTimer) {
                TimerStatus.value = false
                reset()
                counterTheme.value = 3
                counterLongBreak.value = UntilBreak
                // ? with Sounds activate
                console.log('sound state is true');
                sound.playSound('/alarm.mp3')
            } else {
                TimerStatus.value = true
                reset()
                counterTheme.value = 3
                counterLongBreak.value = UntilBreak
                // ? with Sounds activate
                console.log('sound state is true');
                sound.playSound('/alarm.mp3')
            }
        } else if (UntilBreak === counterPomo.value && !SoundsToggle) {
            // ? move value to long break theme && set pomo value to default value
            if (!AutoResumedTimer) TimerStatus.value = false
            TimerStatus.value = true
            reset()
            counterTheme.value = 3
            counterLongBreak.value = UntilBreak
            // ? without sounds activate
            console.log('sound state is false');
        } else if (UntilBreak !== counterPomo.value && SoundsToggle) {
            // ? move value to long break theme && set pomo value to default value
            //  ? add variable values
            reset()
            if (!AutoResumedTimer) TimerStatus.value = false
            if (AutoResumedTimer) TimerStatus.value = true
            if (counterTheme.value === 1) {
                // TimerStatus.value = false
                counterTheme.value = 2
                // ? with Sounds activate
                console.log('sound state is true');
                sound.playSound('/alarm.mp3')
                counterPomo.value += 1
            } else if (counterTheme.value === 2) {
                // TimerStatus.value = false
                counterTheme.value = 1
                counterShortBreak.value += 1
                console.log('ok');
                // ? with Sounds activate
                console.log('sound state is true');
                sound.playSound('/alarm.mp3')
            } else {
                console.error('err');
            }
            //  : : console.error('err');
        } else {
            console.error('err');
        }

        // else {
        //     // ? if !true keep add 
        //     counterTheme.value = 3
        //     counterPomo.value = 1
        //     // sound.playSound('/alarm.mp3')
        //     console.log('sound state is false');
        // }
    }
    const TimerStatus = ref<boolean>(false);
    const TimerCounter = computed(() => counter.value)
    const TimerReset = () => {

    }
    const TimerPaused = () => TimerStatus.value = false
    const TimerResumed = () => TimerStatus.value = true
    const TimerStarted = () => TimerStatus.value === false ? pause() : resume()
    // Timer logic
    const TimerNotifications = (focusTime: string, timerCounter: string, UntilBreak: number, SoundsToggle: boolean, AutoResumedTimer: boolean) => {
        return focusTime === timerCounter && focusTime !== '0:00' ? LogicPomofocus(UntilBreak, SoundsToggle, AutoResumedTimer) : console.error('err')
    }
    return { LogicPomofocus, TimerNotifications, TimerStarted, TimerPaused, TimerResumed, TimerCounter, TimerReset, TimerStatus, reset, pause, resume }
})