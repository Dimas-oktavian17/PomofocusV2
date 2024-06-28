export const useModalStore = defineStore('Modal', () => {
    const isOpen = ref<boolean>()
    return { isOpen }
})