export const useModalStore = defineStore('Modal', () => {
    const isOpen = ref<boolean>(false)
    const isSetttings = ref<boolean>(false)
    const modalSettings = () => {
        isOpen.value = false
        isSetttings.value = true
    }
    const modalLogic = () => isOpen.value ? isSetttings.value = false : isSetttings.value ? isOpen.value = false : ''
    return { modalLogic, modalSettings, isOpen, isSetttings }
})