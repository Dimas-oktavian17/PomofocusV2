export const useSettings = () => {
    return ref([
        {
            id: 1,
            title: 'Focus length',
            status: 25
        },
        {
            id: 2,
            title: 'Pomodoros until long break',
            status: 5,
        },
        {
            id: 3,
            title: 'Short break length',
            status: 5,
        },
        {
            id: 4,
            title: 'Long break length',
            status: 15,
        },
    ])
}
export const useSettingsToggle = () => {
    return ref([
        {
            title: 'Auto resume timer',
            status: false,
        },
        {
            title: 'Sound',
            status: false,
        },
        {
            title: 'Notifications',
            status: false,
        },
    ])
}
