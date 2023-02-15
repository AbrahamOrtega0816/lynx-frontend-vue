<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import { courseService } from '/@src/services'
import { useUserSession } from '/@src/stores/userSession'
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { type IcoursesFilters } from '/@src/common/Icourses'
import { useForm } from 'vee-validate'
import { HttpStatusCode } from '/@src/common/enums/EHttpStatusCode'

const notyf = useNotyf()

const initialValues: IcoursesFilters = {
  categories: [],
  status: [],
  search: '',
  specialities: [],
  limit: 3,
  page: 1,
  favorite: false,
}

const form = reactive(
  useForm<IcoursesFilters>({
    initialValues,
  })
)

const {
  user: { user_id },
} = useUserSession()

const getListCourses = async () => {
  const response = await courseService
    .getListCourses(user_id as number, form.values)
    .then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        return res.data
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return response
}

const { data, isLoading } = useQuery({
  queryKey: ['courses', form.values],
  queryFn: getListCourses,
  refetchOnWindowFocus: false,
})
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div>
    <CoursesFilters />
    <div class="card-grid card-grid-v4">
      <!--List Empty Search Placeholder -->
      <CoursesCard :courses="data?.courses" :is-loading="isLoading" />
      <!--Table Pagination-->
      <VFlexPagination
        v-if="data?.count > 3"
        :item-per-page="form.values.limit"
        :total-items="data.count"
        :current-page="data?.current_page"
        @update:current-page="(page) => (form.values.page = page)"
      />
    </div>
  </div>
</template>
