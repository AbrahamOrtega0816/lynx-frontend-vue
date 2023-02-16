import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { cloneDeep } from 'lodash'

export const useMultipleChoiseActivities = defineStore('multipleChoiseActivities', () => {
  const loading = ref(true)
  const index = ref(0)
  const data = reactive<Array<any>>([])

  const setData = (form: any, i: number) => {
    data[i] = { ...form }
  }

  const setIndex = (i: number) => {
    index.value = i
  }

  const getCurrentData = (id: number) => {
    console.log(data[id])
    return cloneDeep(data[id])
  }

  return {
    setData,
    setIndex,
    getCurrentData,
    index,
    data,
    loading,
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
