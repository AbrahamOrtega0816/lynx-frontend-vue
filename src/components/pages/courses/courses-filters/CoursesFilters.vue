<script setup lang="ts">
import { courseService } from '/@src/services'
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { Field } from 'vee-validate'

const notyf = useNotyf()

const getCoursesStatus = async () => {
  const reponse = await courseService
    .getCoursesStatus()
    .then((res) => {
      if (res.status === 200) {
        return res.data.status
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return reponse
}

const getCoursesCategories = async () => {
  const reponse = await courseService
    .getCoursesCategories()
    .then((res) => {
      if (res.status === 200) {
        return res.data.categories
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return reponse
}

const getCoursesSpecialities = async () => {
  const reponse = await courseService
    .getCoursesSpecialities()
    .then((res) => {
      if (res.status === 200) {
        return res.data.specialities
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return reponse
}

const AsyncField = defineAsyncComponent({
  loader: async () => Field,
})

const { data: status = [] } = useQuery({
  queryKey: ['status'],
  queryFn: getCoursesStatus,
  refetchOnWindowFocus: false,
})

const { data: categories = [] } = useQuery({
  queryKey: ['categories'],
  queryFn: getCoursesCategories,
  refetchOnWindowFocus: false,
})

const { data: specialities = [] } = useQuery({
  queryKey: ['specialities'],
  queryFn: getCoursesSpecialities,
  refetchOnWindowFocus: false,
})
</script>

<template>
  <div class="columns is-desktop">
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`search`">
        <VControl icon="feather:search">
          <input
            class="input custom-text-filter"
            placeholder="Search..."
            @input="handleChange"
          />
        </VControl>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`status`">
        <VField>
          <VControl>
            <Multiselect
              placeholder="Filter by Status"
              track-by="name"
              label="name"
              value-prop="id"
              mode="tags"
              :options="status"
              :max-height="175"
              :searchable="true"
              :create-tag="true"
              @change="handleChange"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`categories`">
        <VField>
          <VControl class="control-multiselect">
            <Multiselect
              placeholder="Filter by Categories"
              track-by="name"
              label="name"
              value-prop="id"
              mode="tags"
              :options="categories"
              :max-height="175"
              fullwidth
              :searchable="true"
              :create-tag="true"
              @change="handleChange"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`specialities`">
        <VField>
          <VControl class="control-multiselect">
            <Multiselect
              placeholder="Filter by Specialities"
              track-by="name"
              label="name"
              value-prop="id"
              mode="tags"
              :options="specialities"
              :max-height="175"
              fullwidth
              :searchable="true"
              :create-tag="true"
              @change="handleChange"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange, field }" :name="`favorite`">
        <VField>
          <VControl>
            <VSwitchBlock
              v-model="field.value"
              @update:model-value="handleChange"
              thin
              label="Favorite"
              color="primary"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
  </div>
</template>

<style lang="scss">
.control-multiselect {
  min-width: 190px;
}
</style>
