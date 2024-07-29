<script setup>
import { useclass } from '~/composables/style/class';
import { useCounterStore } from '~/stores/counter/useCounter';
import { useModalStore } from '~/stores/modal/useModal';
import { useTimerStore } from '~/stores/timer/useTimer';
// Composables
const useMenus = useMenu()
const useSetting = useSettings()
const useSettingToggles = useSettingsToggle()
const DarkMode = useDark()
const useModal = useModalStore()
const useTimer = useTimerStore()
const useCounter = useCounterStore()
const { CounterRealtime, counterPomo, counterShortBreak, counterLongBreak, counterTheme } = storeToRefs(useCounter)
const { timerTheme, bgTheme, symbolTheme, keyTheme, labelTheme } = useclass()
const { isOpen, isSetttings } = storeToRefs(useModal)
const { TimerCounter } = storeToRefs(useTimer)
const { metaSymbol } = useShortcuts()

onKeyStroke('k', (event) => {
    if (event.ctrlKey) {
        event.preventDefault()
        isOpen.value = true
    }
});
onKeyStroke('p', (event) => {
    if (event.ctrlKey) {
        event.preventDefault()
        isSetttings.value = true
    }
});
const FocusLength = computed(() => useSetting.value[0].status)
const ShortBreak = computed(() => useSetting.value[2].status)
const LongBreak = computed(() => useSetting.value[3].status)
const UntilBreak = computed(() => useSetting.value[1].status)
const AutoResumedTimer = computed(() => useSettingToggles.value[0].status)
const SoundToggle = computed(() => useSettingToggles.value[1].status)
watchEffect(() => { //  useCounter.counter === 4 ? useCounter.counter = 1 : 0
    useTimer.TimerStarted()
    useModal.modalSettings()
    useTimer.TimerNotifications(
        convertSecondsToMinutes(FocusLength.value * 60),
        convertSecondsToMinutes(ShortBreak.value * 60),
        convertSecondsToMinutes(LongBreak.value * 60),
        convertSecondsToMinutes(TimerCounter.value),
        UntilBreak.value,
        SoundToggle.value,
        AutoResumedTimer.value
    )
    useCounter.CountTheme()
})
</script>
<template>
    <UCard :class="bgTheme" class="grid max-w-sm grid-cols-1 border-none shadow-none place-items-center ring-0">
        <template #header>
            <BaseStatusLabel />
        </template>
        <section class="grid grid-cols-1 place-items-center">
            <h1 :class="timerTheme" class="font-normal text-9xl">
                {{ convertSecondsToMinutes(TimerCounter) }}
            </h1>
            short:{{ ShortBreak }} long:{{ LongBreak }} {{ SoundToggle }} {{ counterTheme }}:{{ AutoResumedTimer }}
            <span :class="timerTheme" class="text-center place-self-center">
                #{{ counterTheme === 1 ? counterPomo : counterTheme === 2 ? counterShortBreak : counterLongBreak
                }}</span>
        </section>
        <template #footer>
            <ButtonActions @settings="isOpen = true" @paused="useTimer.TimerPaused()" @resumed="useTimer.TimerResumed()"
                @next="useTimer.TimerNext()" />
        </template>
        <!-- Modal Section -->
        <UModal v-model="isOpen">
            <UCard :class="bgTheme">
                <section class="flex flex-col ">
                    <div v-for="({ title, kbd, icon }) in useMenus" :key="icon"
                        class="grid grid-cols-2 place-items-center">
                        <UButton v-if="title === 'Preferences'" :class="timerTheme"
                            class="bg-transparent shadow-none outline-none dark:hover:bg-transparent ring-0 place-self-start hover:bg-transparent"
                            size="sm" @click="isSetttings = true">
                            <UIcon :name="icon" dynamic class="size-7" />
                            {{ title }}
                        </UButton>
                        <UButton v-else :class="timerTheme"
                            class="bg-transparent shadow-none outline-none dark:hover:bg-transparent ring-0 place-self-start hover:bg-transparent"
                            size="sm">
                            <UIcon :name="icon" dynamic class="size-7" />
                            {{ title }}
                        </UButton>
                        <div :class="symbolTheme"
                            class="py-[10px]  bg-transparent shadow-none place-self-end hover:bg-transparent">
                            <UKbd :class="keyTheme" class="bg-transparent border outline-none ring-0">
                                {{ metaSymbol }}
                            </UKbd>
                            +
                            <UKbd :class="keyTheme" class="bg-transparent border outline-none ring-0">
                                {{ kbd }}
                            </UKbd>
                        </div>
                    </div>
                </section>
            </UCard>
        </UModal>
        <UModal v-model="isSetttings" prevent-close>
            <UCard :class="bgTheme">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 :class="timerTheme" class="text-xl font-bold leading-6 ">
                            Settings
                        </h3>
                        <UButton :class="labelTheme" icon="i-heroicons-x-mark-20-solid"
                            class="-my-1 bg-transparent shadow-none hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent"
                            @click="isSetttings = false" />
                    </div>
                </template>
                <section class="flex flex-col ">
                    <div class="grid grid-cols-2 place-items-center">
                        <h1 :class="labelTheme"
                            class="font-normal bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            Dark mode
                        </h1>
                        <div :class="symbolTheme"
                            class="py-[10px]  bg-transparent shadow-none place-self-end hover:bg-transparent">
                            <UToggle v-model="DarkMode" :class="{
                                'bg-red-300 dark:bg-red-900': CounterRealtime === 1,
                                'bg-green-300 dark:bg-green-900': CounterRealtime === 2,
                                'bg-blue-300 dark:bg-blue-900': CounterRealtime === 3,
                            }" />
                        </div>
                    </div>
                    <!-- Number input section -->
                    <div v-for="item in useSetting" :key="item.title"
                        class="grid grid-cols-2 mb-4 place-content-center place-items-center">
                        <h1 :class="labelTheme"
                            class="font-normal bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            {{ item.title }}
                        </h1>
                        <UInput v-if="CounterRealtime === 1" v-model="item.status" class="w-1/3 place-self-end"
                            type="number" size="sm" placeholder="25" color="pink" variant="outline" />
                        <UInput v-else-if="CounterRealtime === 2" v-model="item.status" class="w-1/3 place-self-end"
                            type="number" size="sm" placeholder="25" color="green" variant="outline" />
                        <UInput v-else v-model="item.status" class="w-1/3 place-self-end" type="number" size="sm"
                            placeholder="25" color="blue" variant="outline" />
                    </div>
                    <!-- Toggles sensor section -->
                    <div v-for="item in useSettingToggles" :key="item.title"
                        class="grid grid-cols-2 mb-4 place-content-center place-items-center">
                        <h1 :class="labelTheme"
                            class="font-normal bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            {{ item.title }}
                        </h1>
                        {{ item.status }}
                        <UToggle v-model="item.status" :class="{
                            'bg-red-300 dark:bg-red-900': item.status === true && CounterRealtime === 1,
                            'bg-green-300 dark:bg-green-900': item.status === true && CounterRealtime === 2,
                            'bg-blue-300 dark:bg-blue-900': item.status === true && CounterRealtime === 3,
                        }" class="place-self-end" />
                    </div>
                </section>
            </UCard>
        </UModal>
    </UCard>
</template>