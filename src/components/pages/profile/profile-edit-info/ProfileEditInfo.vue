<script setup lang="ts">
import { Field } from 'vee-validate'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import { userService } from '/@src/services'
import { useUserSession } from '/@src/stores/userSession'
const isUploading = ref(false)
const isLoading = ref(false)

const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}

const AsyncField = defineAsyncComponent({
  loader: async () => Field,
})

const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
}

defineProps<{
  loading?: boolean
}>()

const {
  user: { user_id },
} = useUserSession()

const putUpdateUserProfile = async () => {
  isLoading.value = true
  // const params = {
  //  ...omit(getValues(), ['role', 'score', 'racha','finished_courses','firstName','country'])
  // }
  const params = {}

  await userService
    .putUpdateUserProfile(user_id as number, params)
    .then((res) => {
      if (res.status === 200) {
        notyf.success('Your changes have been successfully saved!')
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>General Info</h3>
          <p>Edit your account's general information</p>
        </div>
        <div class="right">
          <div class="buttons">
            <VButton
              color="primary"
              raised
              :loading="isLoading"
              tabindex="0"
              @keydown.space.prevent="onSave"
              @click="onSave"
            >
              Save Changes
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Profile Picture</h4>
          <p>This is how others will recognize you</p>
        </div>

        <!--Avatar Loading Placeholder -->
        <div v-if="loading" class="columns is-multiline">
          <div class="column is-flex is-justify-content-center">
            <VPlaceloadAvatar class="mx-1" size="xl" />
          </div>
        </div>

        <VAvatar v-else size="xl" class="profile-v-avatar">
          <template #avatar>
            <img
              v-if="!isUploading"
              class="avatar"
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="onceImageErrored(150)"
            />
            <VFilePond
              v-else
              class="profile-filepond"
              name="profile_filepond"
              :chunk-retry-delays="[500, 1000, 3000]"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
              :image-preview-height="140"
              :image-resize-target-width="140"
              :image-resize-target-height="140"
              image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle"
              style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom"
              style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom"
              @addfile="onAddFile"
              @removefile="onRemoveFile"
            />
            <VIconButton
              v-if="!isUploading"
              icon="feather:edit-2"
              class="edit-button is-edit"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = true"
              @click="isUploading = true"
            />
            <VIconButton
              v-else
              icon="feather:arrow-left"
              class="edit-button is-back"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = false"
              @click="isUploading = false"
            />
          </template>
        </VAvatar>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Personal Info</h4>
          <p>Others diserve to know you more</p>
        </div>
        <!--List Loading Placeholder -->
        <div v-if="loading" class="columns is-multiline">
          <div v-for="key in 8" :key="key" class="column is-6">
            <VPlaceload height="30px" width="100%" :lines="1" centered />
          </div>
        </div>
        <div v-else class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ field: { value } }" :name="`email`">
              <VField>
                <VControl icon="dashicons:email-alt2">
                  <VInput
                    disabled
                    name="email"
                    type="text"
                    placeholder="Email"
                    :model-value="value"
                    class="has-text-primary"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ field: { value } }" :name="`english_level`">
              <VField>
                <VControl icon="ph:books">
                  <VInput
                    disabled
                    name="english_level"
                    type="text"
                    placeholder="English Level"
                    :model-value="value"
                    class="has-text-primary"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ field: { value } }" :name="`role`">
              <VField>
                <VControl icon="clarity:users-solid">
                  <VInput
                    disabled
                    name="role"
                    type="text"
                    placeholder="Role"
                    :model-value="value"
                    class="has-text-primary"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ handleChange, field: { value } }" :name="`name`">
              <VField>
                <VControl icon="feather:user">
                  <VInput
                    name="name"
                    type="text"
                    placeholder="First Name"
                    :model-value="value"
                    @update:model-value="handleChange"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ handleChange, field: { value } }" :name="`last_name`">
              <VField>
                <VControl icon="material-symbols:drive-file-rename-outline-outline">
                  <VInput
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    :model-value="value"
                    @update:model-value="handleChange"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField
              v-slot="{ handleChange, field: { value } }"
              :name="`identification`"
            >
              <VField>
                <VControl icon="heroicons:identification-20-solid">
                  <VInput
                    name="identification"
                    type="text"
                    placeholder="Identification"
                    :model-value="value"
                    @update:model-value="handleChange"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ handleChange, field: { value } }" :name="`phone`">
              <VField>
                <VControl icon="ic:baseline-phone-enabled">
                  <VInput
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    :model-value="value"
                    @update:model-value="handleChange"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <AsyncField v-slot="{ handleChange, field: { value } }" :name="`age`">
              <VField>
                <VControl icon="ic:sharp-numbers">
                  <VInput
                    name="age"
                    type="text"
                    placeholder="Age"
                    :model-value="value"
                    @update:model-value="handleChange"
                  />
                </VControl>
              </VField>
            </AsyncField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
