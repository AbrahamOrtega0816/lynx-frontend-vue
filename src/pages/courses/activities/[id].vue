<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Courses Activities')

useHead({
  title: "Courses Activities - Let'z",
})
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="page-content-inner">
    <CoursesActivitiesMain />
  </div>
</template>
