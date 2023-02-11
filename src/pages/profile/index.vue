<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile')

useHead({
  title: "Profile - Let'z",
})
</script>

<template>
  <div class="page-content-inner">
    <ProfileMain />
  </div>
</template>
