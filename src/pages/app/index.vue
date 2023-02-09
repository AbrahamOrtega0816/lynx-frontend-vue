<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import CoursesList from '/@src/components/pages/courses/courses-list/CoursesList.vue'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Courses')

useHead({
  title: "Courses - Let'z",
})
</script>

<template>
  <div class="page-content-inner">
    <CoursesList />
  </div>
</template>
