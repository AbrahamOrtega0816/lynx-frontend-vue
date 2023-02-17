import { acceptHMRUpdate, defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import { multipleChoiseForm } from '../models/IMultipleChoiseActivities'

export const useMultipleChoiseActivities = defineStore('multipleChoiseActivities', () => {
  const data = reactive<Array<multipleChoiseForm>>([])

  const setData = (form: multipleChoiseForm, i: number) => {
    data[i] = { ...form }
  }

  const getCurrentData = (id: number) => {
    return cloneDeep(data[id])
  }

  return {
    setData,
    getCurrentData,
    data,
  } as const
})

/**
 * Pinia supports Hot
 * Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMultipleChoiseActivities, import.meta.hot))
}
