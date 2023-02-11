<!-- eslint-disable prettier-vue/prettier -->
<script lang="ts" setup>
const route = useRoute()
const { id } = route.params
const lessonData = ref(null)
</script>
<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="columns is-multiline">
    <div class="column is-7">
      <CoursesDescription :id="id" />
    </div>
    <div class="column is-5">
      <CoursesLessonsGroup
        :id="id"
        @haslesson-click="(lesson) => (lessonData = lesson)"
      />
    </div>
    <div class="column">
      <CoursesActivities :lesson-id="lessonData?.id" :lesson-name="lessonData?.name" />
    </div>
  </div>
</template>

<!-- eslint-disable prettier-vue/prettier -->
