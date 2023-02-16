<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useWizard } from '/@src/composable/useWizard'
import { IActivity } from '/@src/models/IActivities'

const props = withDefaults(
  defineProps<{
    data: Array<IActivity> | null
    index: number
  }>(),
  {
    data: null,
    index: 0,
  }
)

const wizard = useWizard()

const form = reactive(useForm())
</script>
<template>
  <div v-for="(activitie, index) in props.data" :key="index">
    <MultipleChoiseActivities
      v-if="wizard.step === index"
      :data="activitie"
      :index="index"
      :form="form"
    />
  </div>
</template>
