<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import { courseService } from '/@src/services'
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { Field } from 'vee-validate'
import { HttpStatusCode } from '/@src/common/enums/EHttpStatusCode'

const notyf = useNotyf()

const getCoursesStatus = async () => {
  const reponse = await courseService
    .getCoursesStatus()
    .then((res) => {
      if (res.status === HttpStatusCode.Ok) {
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
      if (res.status === HttpStatusCode.Ok) {
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
      if (res.status === HttpStatusCode.Ok) {
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

const { data: status = [], isLoading: isLoadingStatus } = useQuery({
  queryKey: ['status'],
  queryFn: getCoursesStatus,
  refetchOnWindowFocus: false,
})

const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
  queryKey: ['categories'],
  queryFn: getCoursesCategories,
  refetchOnWindowFocus: false,
})

const { data: specialities = [], isLoading: isLoadingSpecialities } = useQuery({
  queryKey: ['specialities'],
  queryFn: getCoursesSpecialities,
  refetchOnWindowFocus: false,
})
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="columns is-desktop">
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`search`">
        <VControl icon="feather:search">
          <input
            class="input custom-text-filter is-rounded"
            placeholder="Search..."
            @input="handleChange"
          />
        </VControl>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`status`">
        <VField class="is-rounded-select">
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
              :loding="isLoadingStatus"
              @change="handleChange"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`categories`">
        <VField class="is-rounded-select">
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
              :loading="isLoadingCategories"
              @change="handleChange"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
    <div class="column">
      <AsyncField v-slot="{ handleChange }" :name="`specialities`">
        <VField class="is-rounded-select">
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
              :loading="isLoadingSpecialities"
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
              thin
              label="Favorite"
              color="primary"
              @update:model-value="handleChange"
            />
          </VControl>
        </VField>
      </AsyncField>
    </div>
  </div>
</template>

<!-- eslint-disable prettier-vue/prettier -->
<style lang="scss">
.control-multiselect {
  min-width: 190px;
}
</style>
