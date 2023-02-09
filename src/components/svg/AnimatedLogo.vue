<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()
const router = useRouter()
const isLoading = ref(false)

const getLogo = (theme: boolean) =>
  theme ? '/@src/assets/letz/let_white.png' : '/@src/assets/letz/let_gray.png'

const path = ref(getLogo(darkmode.isDark as boolean))

router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})

watch(
  () => darkmode.isDark,
  (theme) => {
    path.value = getLogo(theme as boolean)
  }
)
</script>

<template>
  <img :src="path" alt="Let'z" />
</template>
