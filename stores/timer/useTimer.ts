import { sounds } from '~/composables/utility/sounds';
import { useCounterStore } from '../counter/useCounter';
// import { useFocusStore } from './useTimeFocus';

export const useTimerStore = defineStore('Timer', () => {
    const { counter, reset, pause, resume } = useInterval(1000, { controls: true })
    const sound = sounds()
    const { themeLogic } = useThemeLogic()
    const CounterStore = useCounterStore()
    const { counterPomo, counterTheme, counterShortBreak, counterLongBreak } = storeToRefs(CounterStore)
    // const useFocusStores = useFocusStore()
    // ? Logic Pomofocus until break
    const LogicPomofocus = (UntilBreak: number, SoundsToggle: boolean, AutoResumedTimer: boolean) => {
        // ? Checking condition based on pomo until break && soundsToggle 
        if (UntilBreak === counterPomo.value && SoundsToggle) {
            // ? move value to long break theme && set pomo value to default value
            reset()
            // ? check condition by auto resumed 
            useResumedTimer().resumedLogic(AutoResumedTimer, TimerStatus.value)
            counterTheme.value = 3
            counterLongBreak.value = UntilBreak
            // ? Sounds activate
            sound.playSound('/alarm.mp3')
        } else if (UntilBreak === counterPomo.value && !SoundsToggle) {
            // ? move value to long break theme && set pomo value to default value
            reset()
            // ? check condition by auto resumed 
            useResumedTimer().resumedLogic(AutoResumedTimer, TimerStatus.value)
            counterTheme.value = 3
            counterLongBreak.value = UntilBreak
            // ? without sounds activate
        } // Assuming you have access to the necessary variables and functions
        else if (UntilBreak !== counterPomo.value && SoundsToggle) {
            reset();
            useResumedTimer().resumedLogic(AutoResumedTimer, TimerStatus.value);
            // ? cheking condtions based on theme values
            switch (counterTheme.value) {
                case 1:
                    counterTheme.value = 2;
                    console.log('sound state is true');
                    sound.playSound('/alarm.mp3');
                    counterPomo.value += 1;
                    break;
                case 2:
                    counterTheme.value = 1;
                    counterShortBreak.value += 1;
                    console.log('sound state is true');
                    sound.playSound('/alarm.mp3');
                    break;
            }
        }
        else {
            reset();
            useResumedTimer().resumedLogic(AutoResumedTimer, TimerStatus.value);
            // ? cheking condtions based on theme values
            switch (counterTheme.value) {
                case 1:
                    counterTheme.value = 2;
                    counterPomo.value += 1;
                    break;
                case 2:
                    counterTheme.value = 1;
                    counterShortBreak.value += 1;
                    break;
            }
        }
    }
    const TimerStatus = ref<boolean>(false);
    const TimerCounter = computed(() => counter.value)
    const TimerNext = () => {
        TimerStatus.value = false
        counterTheme.value++
        reset()
    }
    const TimerPaused = () => {
        TimerStatus.value = false
        sound.playSound('/click.wav');
    }
    const TimerResumed = () => {
        TimerStatus.value = true
        sound.playSound('/click.wav');
    }
    const TimerStarted = () => TimerStatus.value === false ? pause() : resume()
    // Timer logic
    const TimerNotifications = (focusTime: string, shortTime: string, longTime: string, timerCounter: string, UntilBreak: number, SoundsToggle: boolean, AutoResumedTimer: boolean) => {
        return counterTheme.value === 1 && focusTime === timerCounter && focusTime !== '0:00' ? LogicPomofocus(UntilBreak, SoundsToggle, AutoResumedTimer) :
            counterTheme.value === 2 && shortTime === timerCounter && shortTime !== '0:00' ? LogicPomofocus(UntilBreak, SoundsToggle, AutoResumedTimer) :
                counterTheme.value === 3 && longTime === timerCounter && longTime !== '0:00' ? LogicPomofocus(UntilBreak, SoundsToggle, AutoResumedTimer) : console.error('err');
    }
    return { LogicPomofocus, TimerNotifications, TimerStarted, TimerPaused, TimerResumed, TimerCounter, TimerNext, TimerStatus, reset, pause, resume }
})