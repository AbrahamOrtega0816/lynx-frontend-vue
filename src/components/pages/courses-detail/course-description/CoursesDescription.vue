<!-- eslint-disable prettier-vue/prettier -->
<script lang="ts" setup>
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { courseService } from '/@src/services'
import { useUserSession } from '/@src/stores/userSession'

const notyf = useNotyf()

const {
  user: { name },
} = useUserSession()

const getCourseDetail = async () => {
  const response = await courseService
    .getCourseDetail(9)
    .then((res) => {
      if (res.status === 200) {
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

const { data: courseDetail, isLoading } = useQuery({
  queryKey: ['course-detail'],
  queryFn: getCourseDetail,
  refetchOnWindowFocus: false,
})
</script>
<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v4">
    <div class="columns is-multiline">
      <!--Header-->
      <div class="column is-12">
        <div class="illustration-header-2">
          <div class="header-image">
            <img
              src="/@src/assets/illustrations/dashboards/lifestyle/reading.svg"
              alt=""
            />
          </div>
          <!--List Loading Placeholder -->
          <div class="header-meta">
            <div :class="[!isLoading && 'is-hidden']">
              <div class="colums is-multiline">
                <div class="colum mt-3">
                  <VPlaceloadText width="350px" />
                </div>
                <div class="colum mt-6">
                  <VPlaceloadText width="350px" />
                </div>
                <div class="colum mt-2">
                  <VPlaceloadText :lines="1" width="350px" />
                </div>
              </div>
            </div>
            <div v-if="!isLoading">
              <h3>Hello, {{ name }}</h3>
              <h3 class="pt-3 is-capitalize">{{ courseDetail?.name }}</h3>
              <p class="pt-3">
                {{ courseDetail?.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable prettier-vue/prettier -->
<style lang="scss">
@import '/@src/scss/abstracts/all';

.lifestyle-dashboard-v4 {
  .illustration-header-2 {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    background: var(--primary);
    font-family: var(--font);
    box-shadow: var(--primary-box-shadow);

    .header-image {
      position: relative;
      height: 195px;
      width: 320px;

      img {
        position: absolute;
        top: 0;
        left: -40px;
        display: block;
        pointer-events: none;
      }
    }

    .header-meta {
      margin-left: 0;
      padding-right: 30px;

      h3 {
        color: var(--smoke-white);
        font-family: var(--font-alt);
        font-weight: 700;
        font-size: 1.3rem;
        max-width: 680px;
      }

      p {
        font-weight: 400;
        color: var(--smoke-white-dark-2);
        margin-bottom: 16px;
        max-width: 620px;
      }

      .action-link {
        span {
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-right: 6px;
        }

        i {
          font-size: 12px;
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v4 {
    .illustration-header-2 {
      background: var(--dark-sidebar);
      box-shadow: none;
    }

    .writing-stats {
      .writing-stat {
        @include vuero-card--dark;
      }
    }

    .updates,
    .featured-authors {
      @include vuero-card--dark;
    }

    .articles-feed {
      background: var(--dark-sidebar-light-8);

      .articles-feed-subheader {
        .selector {
          .button {
            &.is-selected {
              background: var(--primary) !important;
              border-color: var(--primary) !important;
              box-shadow: var(--primary-box-shadow) !important;
              color: var(--white) !important;
            }
          }
        }
      }

      .articles-feed-list {
        .articles-feed-list-inner {
          .articles-feed-item {
            .featured-content {
              background: var(--dark-sidebar);
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .lifestyle-dashboard-v4 {
    .illustration-header-2 {
      flex-direction: column;
      text-align: center;

      .header-image {
        height: auto;
        width: 100%;

        img {
          position: relative;
          width: 100%;
          max-width: 260px;
          margin: 0 auto;
          top: 0;
          left: 0;
          margin-top: -34px;
        }
      }

      .header-meta {
        padding: 20px;

        > p {
          max-width: 280px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
