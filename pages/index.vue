<script setup>
import { useModalStore } from '~/stores/modal/useModal';
// const { counter } = useInterval(1000, { controls: true })
// const useCounter = useCounterStore()
const useModal = useModalStore()
const { isOpen, isSetttings } = storeToRefs(useModal)
const { metaSymbol } = useShortcuts()
// watchEffect(() => useCounter.counter === 4 ? useCounter.counter = 1 : 0)
const useMenus = useMenu()
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

                <Placeholder class="h-32" />
            </UCard>
        </UModal>
    </UCard>
</template>