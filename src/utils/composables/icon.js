import { defineAsyncComponent } from 'vue'

export function useIcon () {
  const getIcon = (iconName) => {
    const iconsList = import.meta.glob('@/assets/svg/*.vue')
    const icon = Object.keys(iconsList).find(key => key.includes(iconName));
    return defineAsyncComponent(iconsList[icon])
  }

  return {
    getIcon
  }
}