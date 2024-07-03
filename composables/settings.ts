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
export const useSettingsToggle = () => {
    return ref([
        {
            title: 'Auto resume timer',
            status: 'resumeTimer',
        },
        {
            title: 'Sound',
            status: 'soundTimer',
        },
        {
            title: 'Notifications',
            status: 'notificationsTimer',
        },
    ])
}
