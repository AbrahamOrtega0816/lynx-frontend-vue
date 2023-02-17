<script lang="ts" setup>
import { useQuery } from 'vue-query'
import { useNotyf } from '/@src/composable/useNotyf'
import { courseService } from '/@src/services'
import { useUserSession } from '/@src/stores/userSession'
import { HttpStatusCode } from '/@src/common/enums/EHttpStatusCode'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const notyf = useNotyf()
const route = useRoute()
const router = useRouter()

const {
  user: { name, image },
} = useUserSession()

const { id } = route.params as any

const getSectionsOfLesson = async () => {
  const response = await courseService
    .getSectionsOfLesson(id)
    .then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        return res.data.sections
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
  return response
}

const { data: sections, isLoading } = useQuery({
  queryKey: ['sections-of-lessons', id],
  queryFn: getSectionsOfLesson,
  refetchOnWindowFocus: false,
})
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <VAvatar
        size="xl"
        :picture="image"
        badge="/images/icons/flags/united-states-of-america.svg"
      />

      <h3 class="title is-4 is-narrow mt-5">{{ name }}</h3>
    </div>

    <div class="all-projects mt-5">
      <div
        v-if="sections?.length > 0"
        class="columns is-multiline project-grid is-flex-tablet-p is-half-tablet-p"
      >
        <div
          class="column is-6-tablet is-3-desktop is-3-fullhd is-one-fifth"
          v-for="(section, index) in sections"
          :key="index"
          @click="() => router.push(`/courses/activities/${section.id}`)"
        >
          <a class="project-grid-item">
            <img
              class="project-avatar"
              src="/images/icons/logos/slicer.svg"
              alt=""
              @error.once="onceImageErrored(150)"
            />
            <h3>{{ section.title }}</h3>
            <p>{{ section.tag }}</p>
            <VProgress size="tiny" :value="31" />
          </a>
        </div>
      </div>
      <div :class="[!isLoading && 'is-hidden']">
        <div class="columns is-multiline p-6">
          <div v-for="key in 12" :key="key" class="column is-3">
            <VPlaceload height="120px" :lines="1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.all-projects {
  .section-heading {
    font-family: var(--font-alt);
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--light-text);
    margin-bottom: 1rem;
  }

  .project-grid {
    margin-bottom: 1.5rem;

    .project-grid-item {
      @include vuero-s-card;

      text-align: center;
      box-shadow: none;

      &:hover,
      &:focus {
        border-color: var(--fade-grey-dark-6);
        box-shadow: var(--light-box-shadow);

        .project-avatar {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      .project-avatar {
        display: block;
        height: 40px;
        width: 40px;
        border-radius: 10px;
        margin: 0 auto 10px;
        filter: grayscale(1);
        opacity: 0.6;
        transition: all 0.3s; // transition-all test
      }

      h3 {
        font-size: 0.95rem;
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 10px;
      }
    }
  }
}

.is-dark {
  .all-projects {
    .project-grid {
      .project-grid-item {
        @include vuero-card--dark;

        h3 {
          color: var(--dark-dark-text);
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .all-projects {
    .all-projects-header {
      flex-direction: column;

      .header-item {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--fade-grey-dark-3);
        padding: 16px 0;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
