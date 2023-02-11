<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { onceImageErrored } from '/@src/utils/via-placeholder'

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
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
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

        <VAvatar size="xl" class="profile-v-avatar">
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

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="First Name" autocomplete="given-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="Last Name" autocomplete="family-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="First Name" autocomplete="given-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="Last Name" autocomplete="family-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="First Name" autocomplete="given-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="Last Name" autocomplete="family-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="First Name" autocomplete="given-name" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="Last Name" autocomplete="family-name" />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
