<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('App')

useHead({
  title: "App - Let'z",
})
</script>

<template>
  <div class="page-content-inner">app</div>
</template>
