export const useModalStore = defineStore('Modal', () => {
    const isOpen = ref<boolean>(false)
    const isSetttings = ref<boolean>(false)
    return { isOpen, isSetttings }
})