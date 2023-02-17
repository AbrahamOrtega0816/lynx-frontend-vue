<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useWizard } from '/@src/composable/useWizard'
import { IActivity } from '/@src/models/IActivities'
import {
  multipleChoiseForm,
  multipleChoiseInitialValues,
  multipleChoiseSchema,
} from '/@src/models/IMultipleChoiseActivities'

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

const form = reactive(
  useForm<multipleChoiseForm>({
    initialValues: multipleChoiseInitialValues,
    validationSchema: multipleChoiseSchema,
  })
)
watch(
  () => form.meta.valid,
  (valid) => {
    wizard.disabled[wizard.step] = !valid
  }
)
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
