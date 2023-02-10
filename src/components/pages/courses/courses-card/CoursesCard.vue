<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

defineProps<{
  courses?: Array<any>
  isLoading?: boolean
}>()

const router = useRouter()

const rediretToCoursesDetail = (id: number) => router.push(`courses/detail/${id}`)
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div>
    <!--List Empty Search Placeholder -->
    <VPlaceholderPage
      :class="[courses?.length !== 0 && 'is-hidden']"
      title="We couldn't find any matching results."
      subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
      larger
    >
      <template #image>
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/search-1.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/search-1-dark.svg"
          alt=""
        />
      </template>
    </VPlaceholderPage>
    <!--List Loading Placeholder -->
    <div v-if="isLoading" class="columns is-multiline">
      <div
        v-for="key in 3"
        :key="key"
        class="column is-6-tablet is-4-desktop is-3-fullhd"
      >
        <div class="card-grid-item">
          <VPlaceload height="160px" class="mb-4" width="100%" :lines="1" centered />
          <div class="card-grid-item-content mb-2">
            <div
              class="mb-2 is-flex is-justify-content-space-between is-align-items-center"
            >
              <div>
                <VPlaceload width="150px" :lines="1" centered />
              </div>
              <div>
                <VPlaceloadAvatar size="small" />
              </div>
            </div>
            <VPlaceload width="250px" :lines="1" />
          </div>
          <div class="card-grid-item-footer">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <div>
                <VPlaceloadAvatar size="small" />
              </div>
              <div class="meta">
                <div>
                  <VPlaceload width="100px" :lines="1" />
                </div>
              </div>
            </div>
            <div
              class="columns pt-5 px-2 is-flex is-justify-content-space-between is-align-items-center"
            >
              <span class="title is-6 is-bold my-0">
                <div>
                  <VPlaceload width="100px" :lines="1" />
                </div>
              </span>
              <span class="title is-6 is-bold is-uppercase">
                <div>
                  <VPlaceload width="100px" :lines="1" />
                </div>
              </span>
            </div>
            <div class="columns px-2">
              <VPlaceload :lines="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <TransitionGroup v-else name="list" tag="div" class="columns is-multiline">
      <!--Grid item-->
      <div
        v-for="course in courses"
        :key="course.id"
        class="column is-6-tablet is-4-desktop is-3-fullhd"
      >
        <div
          class="card-grid-item is-clickable"
          @click="rediretToCoursesDetail(course.id)"
          @keydown="rediretToCoursesDetail(course.id)"
        >
          <img
            :src="course.image"
            :alt="course.name"
            @error.once="onceImageErrored(400, 300)"
          />
          <div class="card-grid-item-content mb-2">
            <div class="mb-2 is-flex is-justify-content-space-between">
              <h2 class="has-text-primary is-capitalized">
                {{ course.specialities.name }} - {{ course?.lessons }} Lessons
              </h2>
              <VIconWrap
                icon="mdi:heart-multiple"
                :color="course.is_favorite ? 'danger' : 'primary'"
              />
            </div>
            <h3 class="dark-inverted is-capitalized">
              {{ course.name }}
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <VSnack
                :title="course.category.name"
                color="primary"
                white
                solid
                icon="feather:life-buoy"
                size="small"
              />
              <div class="meta">
                <i class="fas fa-star warning-text" />
                <i class="fas fa-star warning-text" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
              </div>
            </div>
            <div
              class="columns pt-5 px-2 is-flex is-justify-content-space-between is-align-items-center"
            >
              <span class="title is-6 is-bold my-0"> {{ course?.progress }}% </span>
              <span class="title is-6 is-bold is-uppercase">
                {{ course?.status?.name }}
              </span>
            </div>
            <div class="columns px-2">
              <VProgress size="smaller" :value="course?.progress" />
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<!-- eslint-disable prettier-vue/prettier -->
<style lang="scss">
@import '/@src/scss/abstracts/all';

.card-grid {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.9rem !important;
  }
}

.card-grid-v4 {
  .card-grid-item {
    @include vuero-s-card;

    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 16px;
    min-height: 300px;

    &:hover,
    &:focus {
      box-shadow: var(--light-box-shadow);
    }

    > img {
      display: block;
      border-radius: 12px;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .card-grid-item-content {
      padding: 12px 5px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
        line-height: 1.3;
      }
    }

    .card-grid-item-footer {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      padding: 0 5px 10px;
      gap: 10px;

      .meta {
        margin-left: 8px;
        line-height: 1.2;
      }
    }
  }
}

.progress-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  label {
    font-family: var(--font);
    font-size: 0.9rem;
    color: var(--light-text) !important;
    font-weight: 400;
  }
}

.is-dark {
  .card-grid-v4 {
    .card-grid-item {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .card-grid-v4 {
    .columns {
      display: flex;
    }

    .column {
      width: 33.3%;
      min-width: 33.3%;
    }
  }
}
</style>
