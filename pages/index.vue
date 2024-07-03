<script setup>
import { useModalStore } from '~/stores/modal/useModal';
// const { counter } = useInterval(1000, { controls: true })
// const useCounter = useCounterStore()
const useModal = useModalStore()
const { isOpen } = storeToRefs(useModal)
const { metaSymbol } = useShortcuts()
// watchEffect(() => useCounter.counter === 4 ? useCounter.counter = 1 : 0)
const useMenus = useMenu()
onKeyStroke('k', (event) => {
    if (event.ctrlKey) {
        event.preventDefault()
        isOpen.value = true
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
    </UCard>
</template>