<script setup lang="ts">
import { useQuery } from 'vue-query'
import { userService } from '/@src/services'
import { useNotyf } from '/@src/composable/useNotyf'
import { useUserSession } from '/@src/stores/userSession'
import { useForm } from 'vee-validate'
import { omit } from 'lodash'
import { IUser, IUserData } from '../../../models/IUser.js'
import { HttpStatusCode } from '/@src/common/enums/EHttpStatusCode'

const notyf = useNotyf()

const {
  user: { user_id, role },
  setUser,
} = useUserSession()

const initialValues = {
  image: null,
  name: '',
  last_name: '',
  english_level: '',
  identification: '',
  phone: '',
  age: '',
  country: '',
}

const form = reactive(
  useForm({
    initialValues: initialValues,
  })
)

const getProfile = async () => {
  const reponse = await userService
    .getusersById(user_id as number)
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
  return reponse
}

const {
  data: profile = null,
  isLoading,
  refetch,
} = useQuery<IUser>({
  queryKey: ['userProfile'],
  queryFn: getProfile,
  refetchOnWindowFocus: false,
  onSuccess(data) {
    form.resetForm({ values: { ...initialValues, ...data } })
  },
})

const putUpdateUserProfile = async (image: string) => {
  const params = {
    ...omit({ ...form.values, image }, [
      'role',
      'score',
      'racha',
      'finished_courses',
      'firstName',
      'country',
    ]),
  }
  await userService
    .putUpdateUserProfile(user_id as number, params)
    .then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        const { name, image, score, id } = res.data
        setUser({ name, image, score, user_id: id } as IUserData)
        notyf.success('Your changes have been successfully saved!')
        refetch.value()
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
}

const indexView = ref(0)
</script>

<template>
  <div class="page-content-inner">
    <!--Edit Profile-->
    <div class="account-wrapper">
      <div class="columns">
        <!--Navigation-->
        <div class="column is-4">
          <div class="account-box is-navigation">
            <VBlock
              :title="`${profile?.name} ${profile?.last_name}`"
              :subtitle="role"
              center
            >
              <template #icon>
                <VAvatar
                  size="large"
                  :picture="profile?.image"
                  badge="/images/icons/flags/united-states-of-america.svg"
                />
              </template>
            </VBlock>

            <div class="account-menu">
              <div
                @click="indexView = 0"
                :class="`account-menu-item is-clickable ${indexView === 0 && 'active'}`"
              >
                <i aria-hidden="true" class="lnil lnil-user-alt"></i>
                <span>General</span>
                <span class="end">
                  <i aria-hidden="true" class="fas fa-arrow-right"></i>
                </span>
              </div>
              <div
                @click="indexView = 1"
                :class="`account-menu-item is-clickable ${indexView === 1 && 'active'}`"
              >
                <i
                  aria-hidden="true"
                  data-icon="healthicons:ui-secure-outline"
                  class="iconify"
                ></i>
                <span>Security</span>
                <span class="end">
                  <i aria-hidden="true" class="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-8">
          <ProfileEditInfo
            @click-update-profile="putUpdateUserProfile"
            v-if="indexView === 0"
            :loading="isLoading"
          />
          <ProfileChangePassword v-if="indexView === 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .account-wrapper {
    margin-top: 30px;
  }
}

.account-wrapper {
  padding-bottom: 60px;

  .account-box {
    @include vuero-s-card;

    &.is-navigation {
      .media-flex-center {
        padding-bottom: 20px;

        .flex-meta {
          span {
            &:first-child {
              font-size: 1.3rem;
            }
          }
        }
      }

      .account-menu {
        .account-menu-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border: 1px solid transparent;
          border-radius: 8px;
          margin-bottom: 5px;
          transition: all 0.3s; // transition-all test

          &.active {
            box-shadow: var(--light-box-shadow);
            border-color: var(--fade-grey-dark-3);

            span,
            svg,
            i {
              color: var(--primary);
            }

            .end {
              display: block;
            }
          }

          &:not(.active) {
            &:hover {
              background: var(--fade-grey-light-3);
            }
          }

          i,
          svg {
            margin-right: 8px;
            font-size: 1.1rem;
            color: var(--light-text);

            &.fas,
            .fal,
            .far {
              font-size: 0.9rem;
            }
          }

          span {
            font-family: var(--font-alt);
            font-size: 0.95rem;
            color: var(--dark-text);
          }

          .end {
            margin-left: auto;
            display: none;
          }
        }
      }
    }

    &.is-form {
      padding: 0;

      &.is-footerless {
        padding-bottom: 20px;
      }

      .form-head,
      .form-foot {
        padding: 12px 20px;

        .form-head-inner,
        .form-foot-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }

      .form-head {
        border-bottom: 1px solid var(--fade-grey-dark-3);
        transition: all 0.3s; // transition-all test

        &.is-stuck {
          background: var(--white);
          padding-right: 80px;
          border-left: 1px solid var(--fade-grey-dark-3);
        }

        .left {
          h3 {
            font-family: var(--font-alt);
            font-size: 1.2rem;
            line-height: 1.3;
          }

          p {
            font-size: 0.95rem;
          }
        }
      }

      .form-foot {
        border-top: 1px solid var(--fade-grey-dark-3);
      }

      .form-body {
        padding: 20px;

        .fieldset {
          padding: 20px 0;
          max-width: 480px;
          margin: 0 auto;

          .fieldset-heading {
            margin-bottom: 20px;

            h4 {
              font-family: var(--font-alt);
              font-weight: 600;
              font-size: 1rem;
            }

            p {
              font-size: 0.9rem;
            }
          }

          .v-avatar {
            position: relative;
            display: block;
            margin: 0 auto;

            .edit-button {
              position: absolute;
              bottom: 0;
              right: 0;
            }
          }

          .setting-list {
            .setting-form {
              text-align: center;

              .filepond-profile-wrap {
                margin: 0 auto 10px !important;
              }
            }

            .setting-item {
              display: flex;
              align-items: center;
              margin-bottom: 24px;

              .icon-wrap {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                min-width: 50px;
                height: 50px;
                border-radius: var(--radius-rounded);
                background: var(--fade-grey-light-2);
                border: 1px solid var(--fade-grey-dark-3);
                color: var(--light-text);

                &.has-img {
                  border-color: var(--primary);

                  img {
                    width: 36px;
                    min-width: 36px;
                    height: 36px;
                  }
                }

                i,
                svg {
                  font-size: 1.4rem;
                }
              }

              img {
                display: block;
                width: 50px;
                min-width: 50px;
                height: 50px;
                border-radius: var(--radius-rounded);
                border: 1px solid transparent;
              }

              .meta {
                margin-left: 10px;

                > span {
                  font-family: var(--font);
                  display: block;

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                    font-size: 0.9rem;
                  }

                  &:nth-child(2),
                  &:nth-child(3) {
                    font-size: 0.85rem;
                    color: var(--light-text);

                    i,
                    svg {
                      position: relative;
                      top: -2px;
                      font-size: 4px;
                      margin: 0 6px;
                    }
                  }

                  &:nth-child(3) {
                    color: var(--primary);
                  }

                  span {
                    display: inline-block;
                  }
                }
              }

              .end {
                margin-left: auto;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .account-wrapper {
    .account-box {
      @include vuero-card--dark;

      &.is-navigation {
        .account-menu {
          .account-menu-item {
            &.active {
              background: var(--dark-sidebar-light-8);
              border-color: var(--dark-sidebar-light-12);

              i,
              svg,
              span {
                color: var(--primary);
              }
            }

            &:not(.active) {
              &:hover {
                background: var(--dark-sidebar-light-10);
              }
            }

            span {
              color: var(--dark-dark-text);
            }
          }
        }
      }

      &.is-form {
        .form-head,
        .form-foot {
          border-color: var(--dark-sidebar-light-12);
        }

        .form-head {
          &.is-stuck {
            background: var(--dark-sidebar);
            border-color: var(--dark-sidebar-light-6);
          }

          .left {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }

        .form-body {
          .fieldset {
            .fieldset-heading {
              h4 {
                color: var(--dark-dark-text);
              }
            }

            .setting-list {
              .setting-item {
                > img,
                > .icon-wrap,
                > .icon-wrap img {
                  border-color: var(--dark-sidebar-light-12);
                }

                > .icon-wrap {
                  background: var(--dark-sidebar-light-2);
                }

                .meta {
                  > span {
                    &:nth-child(3) {
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
</style>
