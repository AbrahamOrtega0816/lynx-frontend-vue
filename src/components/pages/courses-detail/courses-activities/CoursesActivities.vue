<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { lessonsService } from '/@src/services'

const notyf = useNotyf()

const props = withDefaults(
  defineProps<{
    lessonId: number | null
    lessonName: string
  }>(),
  {
    lessonId: null,
    lessonName: '',
  }
)

const getLessonsByGroupId = async () => {
  const response = await lessonsService
    .getLessonsByGroupId(props.lessonId as number)
    .then((res) => {
      if (res.status === 200) {
        return res.data.lessons
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return response
}

const {
  data: activities = [],
  isLoading,
  refetch,
} = useQuery({
  queryKey: ['activities'],
  queryFn: getLessonsByGroupId,
  refetchOnWindowFocus: false,
  enabled: Boolean(props.lessonId),
})

watch(
  () => props.lessonId,
  () => {
    refetch.value()
  }
)
</script>
<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div
    v-if="activities?.length > 0 && !isLoading"
    class="lifestyle-dashboard lifestyle-dashboard-v2"
  >
    <div class="dashboard-title is-main">
      <div class="left">
        <h2 class="dark-inverted">Explore {{ props.lessonName }} Activities</h2>
        <p class="h-hidden-mobile">
          Explore some of the best activities for {{ props.lessonName }}
        </p>
      </div>
      <div class="right">
        <VControl icon="feather:search">
          <input class="input custom-text-filter" placeholder="Search..." />
        </VControl>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="columns is-multiline is-flex-tablet-p">
          <!--List-->
          <div class="column">
            <div class="dashboard-list">
              <div class="inner-list columns is-multiline">
                <div
                  v-for="(activitie, index) in activities"
                  :key="index"
                  class="column is-6-tablet is-4-desktop is-3-fullhd"
                >
                  <VBlock :title="activitie?.title" center>
                    <template #icon>
                      <VIconBox
                        class="is-capitalize"
                        size="small"
                        color="primary"
                        bordered
                      >
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="mingcute:book-4-line"
                        />
                      </VIconBox>
                    </template>
                    <template #action>
                      <VIconButton
                        :disabled="!activitie?.is_active"
                        :icon="
                          activitie?.is_active
                            ? 'feather:arrow-right'
                            : 'grommet-icons:secure'
                        "
                        circle
                        dark-outlined
                      />
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--List Empty Search Placeholder -->
  <VPlaceholderPage
    v-if="!isLoading"
    :class="[activities?.length && 'is-hidden']"
    title="Select a lesson to be able to visualize its activities"
  >
    <template #image>
      <img
        class="light-image"
        src="/@src/assets/illustrations/components/lists.svg"
        alt=""
      />
      <img
        class="dark-image"
        src="/@src/assets/illustrations/components/lists-dark.svg"
        alt=""
      />
    </template>
  </VPlaceholderPage>

  <!--List Loading Placeholder -->
  <div v-if="isLoading" class="columns is-multiline">
    <div v-for="key in 12" :key="key" class="column is-6-tablet is-4-desktop is-3-fullhd">
      <VPlaceload height="60px" width="100%" :lines="1" centered />
    </div>
  </div>
</template>
<!-- eslint-disable prettier-vue/prettier -->
<style lang="scss">
@import '/@src/scss/abstracts/all';

.lifestyle-dashboard-v2 {
  .dashboard-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: var(--font);

    &.is-main {
      margin-bottom: 30px;

      h2 {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .dashboard-list {
    .inner-list {
      .media-flex-center {
        @include vuero-l-card;

        display: flex;
        padding: 12px;
        max-height: 66px;

        &:hover,
        &:focus {
          .flex-end {
            .rating {
              opacity: 1;
            }
          }
        }

        .flex-meta {
          max-width: 160px;
          width: 100%;

          span {
            font-variant: small-caps;
          }
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v2 {
    .dashboard-list {
      .inner-list {
        .media-flex-center {
          @include vuero-card--dark;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v2 {
    .is-flex-tablet-p {
      .column {
        &.is-3 {
          min-width: 25% !important;
          width: 25% !important;
        }
      }
    }
  }
}
</style>
