export const useMenu = () => {
  return ref([
    {
      icon: 'i-ph-chart-bar',
      title: 'Statistics',
      kbd: 'S'
    },
    {
      icon: 'i-ph-gear-six-fill',
      title: 'Preferences',
      kbd: 'P'
    },
    {
      icon: 'i-ph-key-return-fill',
      title: 'Shortcuts',
      kbd: 'K'
    },
  ])
}
