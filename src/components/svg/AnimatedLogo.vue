<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()
const router = useRouter()
const isLoading = ref(false)

const dark = ref(darkmode.isDark)

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
    dark.value = theme
  }
)
</script>

<template>
  <!-- <img :src="path" alt="Let'z" /> -->
  <div>
    <img v-if="dark" src="/@src/assets/letz/let_white.png" alt="" />
    <img v-else src="/@src/assets/letz/let_gray.png" alt="" />
  </div>
</template>
