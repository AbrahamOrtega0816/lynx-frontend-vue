<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import { tns, type TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { lessonsService } from '/@src/services'
import sleep from '/@src/utils/sleep'

let slider: TinySliderInstance
const sliderElement = ref<HTMLElement>()
const nextButtonElement = ref<HTMLElement>()
const prevButtonElement = ref<HTMLElement>()

const { id } = withDefaults(
  defineProps<{
    id: number
  }>(),
  {
    id: 0,
  }
)

const notyf = useNotyf()

const onIndexChanged = (info: any) => {
  // direct access to info object
  const indexPrev = info.indexCached
  const indexCurrent = info.index

  // update style based on index
  info.slideItems[indexPrev].classList.remove('active')
  info.slideItems[indexCurrent].classList.add('active')
}

const mountedSlider = async () => {
  if (sliderElement.value && nextButtonElement.value && prevButtonElement.value) {
    slider = tns({
      container: sliderElement.value,
      controls: true,
      nav: false,
      mouseDrag: false,
      nextButton: nextButtonElement.value,
      prevButton: prevButtonElement.value,
      fixedWidth: 150,
      swipeAngle: false,
      items: 1,
      center: false,
      loop: true,
    })
    slider?.events?.on('indexChanged', onIndexChanged)
    await sleep(100)
    isFinish.value = true
  }
}

const goTo = (index: number) => {
  if (slider) {
    slider.goTo(index)
  }
}

onUnmounted(() => {
  if (slider) {
    slider.events.off('indexChanged', onIndexChanged)
    slider.destroy()
  }
})

const getLessonsGroups = async () => {
  const response = await lessonsService
    .getLessonsGroups(id)
    .then((res) => {
      if (res.status === 200) {
        return res.data.groups_lessons
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return response
}

const { data: lessonsGroup = [], isLoading } = await useQuery({
  queryKey: ['lessonsGroup'],
  queryFn: getLessonsGroups,
  refetchOnWindowFocus: false,
  async onSuccess() {
    await sleep(100)
    mountedSlider()
  },
})

const isFinish = ref(false)
</script>
<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="lesson-delivery-dashboard">
    <!--Left-->
    <div class="left">
      <div class="left-body">
        <div class="lessons">
          <div class="lessons-toolbar">
            <div class="left">
              <h3>Lessons</h3>
            </div>
          </div>
          <div
            v-if="lessonsGroup?.length > 0 && !isLoading"
            :class="[{ 'hide-lesson-pills': !isFinish }, 'lesson-pills']"
          >
            <div ref="prevButtonElement" class="slick-custom is-prev slick-arrow">
              <i aria-hidden="true" class="fas fa-angle-left"></i>
            </div>
            <div ref="nextButtonElement" class="slick-custom is-next slick-arrow">
              <i aria-hidden="true" class="fas fa-angle-right"></i>
            </div>
            <div ref="sliderElement" class="lesson-pills-inner pill-carousel">
              <!--Pills Loop-->
              <div
                v-for="(item, index) in lessonsGroup"
                :key="item.id"
                class="lesson-pill"
                tabindex="0"
                @keydown.space.prevent="goTo(index)"
                @click="goTo(index)"
              >
                <div class="colums">
                  <div class="columm is-flex is-justify-content-center">
                    <div class="lesson-pill-icon">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="mdi:book-open-page-variant"
                      />
                    </div>
                  </div>
                  <div class="columm">
                    <span class="is-capitalize text">{{ item?.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--List Loading Placeholder -->
          <div v-if="isLoading" class="columns is-multiline">
            <div
              v-for="key in 3"
              :key="key"
              class="column is-6-tablet is-4-desktop is-3-fullhd"
            >
              <div class="card-grid-item">
                <VPlaceload
                  height="160px"
                  class="mb-4"
                  width="100%"
                  :lines="1"
                  centered
                />
              </div>
            </div>
          </div>
          <!--List Empty Search Placeholder -->
          <VPlaceholderPage
            v-if="!isLoading"
            :class="[lessonsGroup?.length !== 0 && 'is-hidden']"
            title="We are sorry, at this moment we do not have lessons for this course."
            subtitle="We are working to provide you with more content, and keep learning."
            small
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/search-4.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                alt=""
              />
            </template>
          </VPlaceholderPage>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable prettier-vue/prettier -->
<style lang="scss">
@import '/@src/scss/abstracts/all';

.hide-lesson-pills {
  opacity: 0;
}

.lesson-delivery-dashboard {
  display: flex;

  .left {
    width: 100%;

    .left-body {
      .lessons {
        .lessons-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          font-family: var(--font);

          .left {
            h3 {
              font-family: var(--font-alt);
              color: var(--dark-text);
              font-size: 1.3rem;
              font-weight: 600;
            }
          }
        }
      }

      .lesson-pills {
        position: relative;

        .lesson-pills-inner {
          .lesson-pill {
            text-align: center;
            width: 130px;
            max-width: 130px;
            height: 170px;
            background: var(--white);
            border: 1px solid var(--fade-grey-dark-3);
            border-radius: 15px;
            padding: 10px;
            margin: 0 10px;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &.is-active {
              background: var(--primary);
              border-color: var(--primary);

              .lesson-pill-icon {
                border-color: var(--primary);
              }

              span {
                color: var(--smoke-primary) !important;
              }
            }

            .lesson-pill-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 80px;
              height: 80px;
              background: var(--white);
              border: 1px solid var(--fade-grey-dark-3);
              border-radius: 500px;

              svg {
                font-size: 30px;
                color: var(--primary);
              }
            }

            span {
              font-family: var(--font);
              font-weight: 500;
              padding-top: 12px;
              display: block;
              transition: color 0.3s;
              word-wrap: break-word;
            }
          }
        }

        .tns-slider {
          .active {
            background: var(--primary);
            border-color: var(--primary);

            .lesson-pill-icon {
              border-color: var(--primary);
            }

            > span {
              color: var(--smoke-white);
            }
          }
        }

        .slick-prev::before,
        .slick-next::before {
          color: var(--muted-grey);
        }

        .slick-custom {
          position: absolute;
          top: -50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          width: 30px;
          height: 30px;
          background: transparent;
          border-radius: 100px;
          cursor: pointer;
          color: var(--light-text);
          transition: all 0.3s; // transition-all test
          z-index: 25;

          &.is-prev {
            right: 30px;

            i {
              position: relative;
              left: -1px;
            }
          }

          &.is-next {
            right: 0;

            i {
              position: relative;
              right: -1px;
            }
          }

          &:hover {
            border-color: var(--fade-grey-dark-4);
            background: var(--white);
            box-shadow: var(--light-box-shadow);
          }

          svg {
            height: 16px;
            width: 16px;
            color: var(--primary);
            transition: all 0.3s; // transition-all test
          }
        }
      }

      .lessons-list {
        padding: 30px 0;

        .lessons-list-item {
          @include vuero-l-card;

          position: relative;
          padding: 0;
          border: none;
          background: none;
        }
      }
    }
  }
}

.is-dark {
  .lesson-delivery-dashboard {
    .left {
      .left-body {
        .lessons {
          .lessons-toolbar {
            .left {
              h3 {
                color: var(--dark-dark-text);
              }
            }
          }

          .lesson-pills {
            .lesson-pills-inner {
              .lesson-pill {
                background: var(--dark-sidebar-light-2) !important;
                border-color: var(--dark-sidebar-light-12) !important;

                span {
                  color: var(--dark-dark-text);
                }

                &.active {
                  background: var(--primary) !important;
                  border-color: var(--primary) !important;

                  .lesson-pill-icon {
                    background: var(--fade-grey-light-3);
                    border-color: var(--fade-grey-light-3);
                  }

                  span {
                    color: var(--white);
                  }
                }
              }

              .slick-slide {
                &.slick-current {
                  background: var(--primary) !important;
                  border-color: var(--primary) !important;

                  .lesson-pill-icon {
                    border-color: var(--primary) !important;
                  }

                  span {
                    color: var(--smoke-white);
                  }
                }
              }

              .slick-custom {
                &:hover {
                  border-color: var(--dark-sidebar-light-2);
                  background: var(--dark-sidebar-light-2);
                  box-shadow: var(--light-box-shadow);
                }
              }
            }
          }

          .lessons-list {
            .lessons-list-item {
              @include vuero-card--dark;

              background: none;
              border: none;

              .image-container {
                .timer {
                  background: var(--primary);
                  border-color: var(--primary);

                  span {
                    &:nth-child(2) {
                      color: var(--primary-light-18);
                    }
                  }
                }
              }

              .meta-container {
                .meta-icon {
                  background: var(--fade-grey-light-3);
                  border-color: var(--fade-grey-light-3);
                }

                .meta-content {
                  h4 {
                    color: var(--dark-dark-text);
                  }

                  p {
                    .fa-star {
                      color: var(--primary);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .lesson-delivery-dashboard {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding: 0;
    }

    .left {
      .left-header {
        flex-direction: column;
        text-align: center;

        .header-image {
          img {
            left: 0;
          }
        }
      }

      .lessons-list {
        .lessons-list-item {
          .image-container {
            img {
              min-height: 220px !important;
              max-height: 220px !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lesson-delivery-dashboard {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding: 0;
    }

    .left {
      .lessons-list {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }

        .lessons-list-item {
          .image-container {
            img {
              min-height: 220px !important;
              max-height: 220px !important;
            }
          }
        }
      }
    }
  }
}
</style>
