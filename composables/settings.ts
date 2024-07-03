export const useSettings = () => {
    return ref([
        {
            title: 'Focus length',
            status: 'focusedNumber',
        },
        {
            title: 'Short break length',
            status: 'shortbreakNumber',
        },
        {
            title: 'Long break length',
            status: 'longbreakNumber',
        },
    ])
}
