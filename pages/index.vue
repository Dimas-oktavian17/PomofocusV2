<script setup>
import { useModalStore } from '~/stores/modal/useModal';
// const { counter } = useInterval(1000, { controls: true })
// const useCounter = useCounterStore()
const useModal = useModalStore()
const { isOpen, isSetttings } = storeToRefs(useModal)
const { metaSymbol } = useShortcuts()
// watchEffect(() => useCounter.counter === 4 ? useCounter.counter = 1 : 0)
const useMenus = useMenu()
const useSetting = useSettings()
const useSettingToggles = useSettingsToggle()
onKeyStroke('k', (event) => {
    if (event.ctrlKey) {
        event.preventDefault()
        isOpen.value = true
        isOpen.value ? isSetttings.value = false : ''
    }
});
onKeyStroke('p', (event) => {
    if (event.ctrlKey) {
        event.preventDefault()
        isSetttings.value = true
        isSetttings.value ? isOpen.value = false : ''
    }
});
</script>
<template>
    <UCard class="grid max-w-sm grid-cols-1 border-none shadow-none place-items-center ring-0 bg-red-50">
        <template #header>
            <BaseStatusLabel />
        </template>
        <h1 class="font-normal text-red-950 text-9xl">
            <!-- {{ convertSecondsToMinutes(counter) }} -->
        </h1>
        <template #footer>
            <ButtonActions @settings="isOpen = true" />
        </template>
        <!-- Modal Section -->
        <UModal v-model="isOpen">
            <UCard class=" bg-red-50">
                <section class="flex flex-col ">
                    <div v-for="({ title, kbd, icon }) in useMenus" :key="icon"
                        class="grid grid-cols-2 place-items-center">
                        <UButton
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
                            <UToggle class="bg-red-300" :model-value="true" />
                        </div>
                    </div>
                    <!-- Number input section -->
                    <div v-for="({ title, status }) in useSetting" :key="status"
                        class="grid grid-cols-2 mb-4 place-content-center place-items-center">
                        <h1
                            class="font-normal text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            {{ title }}
                        </h1>
                        <UInput class="w-1/3 place-self-end" type="number" size="sm" placeholder="25" color="pink"
                            variant="outline" :v-model="status" />
                    </div>
                    <!-- Toggles sensor section -->
                    <div v-for="({ title, status }) in useSettingToggles" :key="status"
                        class="grid grid-cols-2 mb-4 place-content-center place-items-center">
                        <h1
                            class="font-normal text-red-900 bg-transparent shadow-none outline-none ring-0 place-self-start hover:bg-transparent">
                            {{ title }}
                        </h1>
                        <UToggle class="bg-red-300 place-self-end" :model-value="true" />
                    </div>
                </section>
            </UCard>
        </UModal>
    </UCard>
</template>