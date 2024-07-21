<script setup>
import { useModalStore } from '~/stores/modal/useModal';
import { useFocusStore } from '~/stores/timer/useTimeFocus';
import { useTimerStore } from '~/stores/timer/useTimer';
// Composables
const useMenus = useMenu()
const useSetting = useSettings()
const useSettingToggles = useSettingsToggle()
const DarkMode = useDark()
const useModal = useModalStore()
const useTimer = useTimerStore()
const useFocus = useFocusStore()
const { FocusLength, LongBreak, ShortBreak } = storeToRefs(useFocus)
const { isOpen, isSetttings } = storeToRefs(useModal)
const { TimerCounter } = storeToRefs(useTimer)
const { metaSymbol } = useShortcuts()
// const useCounter = useCounterStore()
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
watchEffect(() => { //  useCounter.counter === 4 ? useCounter.counter = 1 : 0
    useTimer.TimerStarted()
    useModal.modalSettings()
    useTimer.TimerNotifications()
    console.log(FocusLength.value);
})
</script>
<template>
    <UCard class="grid max-w-sm grid-cols-1 border-none shadow-none place-items-center ring-0 bg-red-50">
        <template #header>
            <BaseStatusLabel />
        </template>
        <h1 class="font-normal text-red-950 text-9xl">
            {{ convertSecondsToMinutes(FocusLength * 60) }}
            {{ convertSecondsToMinutes(TimerCounter) }}
        </h1>
        <template #footer>
            <ButtonActions @settings="isOpen = true" @paused="useTimer.TimerPaused()"
                @resumed="useTimer.TimerResumed()" />
        </template>
        <!-- Modal Section -->
        <UModal v-model="isOpen">
            <UCard class=" bg-red-50">
                <section class="flex flex-col ">
                    <div v-for="({ title, kbd, icon }) in useMenus" :key="icon"
                        class="grid grid-cols-2 place-items-center">
                        <UButton v-if="title === 'Preferences'"
                            class="text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent"
                            size="sm" @click="isSetttings = true">
                            <UIcon :name="icon" dynamic class="size-7" />
                            {{ title }}
                        </UButton>
                        <UButton v-else
                            class="text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent"
                            size="sm">
                            <UIcon :name="icon" dynamic class="size-7" />
                            {{ title }}
                        </UButton>
                        <div
                            class="py-[10px] text-red-300 bg-transparent shadow-none place-self-end hover:bg-transparent">
                            <UKbd class="text-red-300 bg-transparent border border-red-300 outline-none ring-0">
                                {{ metaSymbol }}
                            </UKbd>
                            +
                            <UKbd class="text-red-300 bg-transparent border border-red-300 outline-none ring-0">
                                {{ kbd }}
                            </UKbd>
                        </div>
                    </div>
                </section>
            </UCard>
        </UModal>
        <UModal v-model="isSetttings" prevent-close>
            <UCard class=" bg-red-50">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-xl font-bold leading-6 text-red-950">
                            Settings
                        </h3>
                        <UButton icon="i-heroicons-x-mark-20-solid"
                            class="-my-1 text-red-900 bg-transparent shadow-none hover:bg-transparent"
                            @click="isSetttings = false" />
                    </div>
                </template>
                <section class="flex flex-col ">
                    <div class="grid grid-cols-2 place-items-center">
                        <h1
                            class="font-normal text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            Dark mode
                        </h1>
                        <div
                            class="py-[10px] text-red-300 bg-transparent shadow-none place-self-end hover:bg-transparent">
                            <UToggle v-model="DarkMode" :class="[DarkMode === true ? 'bg-red-300' : '']" />
                        </div>
                    </div>
                    <!-- Number input section -->
                    <div v-for="item in useSetting" :key="item.title"
                        class="grid grid-cols-2 mb-4 place-content-center place-items-center">
                        <h1
                            class="font-normal text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            {{ item.title }}
                        </h1>
                        {{ item.status }}
                        <UInput v-model="item.status" class="w-1/3 place-self-end" type="number" size="sm"
                            placeholder="25" color="pink" variant="outline" />
                    </div>
                    <!-- Toggles sensor section -->
                    <div v-for="item in useSettingToggles" :key="item.title"
                        class="grid grid-cols-2 mb-4 place-content-center place-items-center">
                        <h1
                            class="font-normal text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            {{ item.title }}
                        </h1>
                        <UToggle v-model="item.status" :class="[item.status === true ? 'bg-red-300' : '']"
                            class="place-self-end" />
                    </div>
                </section>
            </UCard>
        </UModal>
    </UCard>
</template>