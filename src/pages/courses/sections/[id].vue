<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Courses Sections')

useHead({
  title: "Courses Sections - Let'z",
})
</script>

<template>
  <div class="page-content-inner">
    <CoursesSectionsMain />
  </div>
</template>
