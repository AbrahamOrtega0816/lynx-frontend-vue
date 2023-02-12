<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import { authService } from '/@src/services'
import { useUserSession } from '/@src/stores/userSession'

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const notyf = useNotyf()

const loading = ref(false)

const {
  user: { user_id },
} = useUserSession()

const postResetPassword = async () => {
  loading.value = true
  const params = {
    user_id,
  }
  await authService
    .postchangePassword(params)
    .then((res) => {
      if (res.status === 200) {
        notyf.success(`${res.data}`)
      } else {
        notyf.info(`${res.message}`)
      }
    })
    .catch((err) => {
      notyf.error(`${err.message}`)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>Security Info</h3>
          <p>
            Press the button to reset your password, an email will be sent to your email
            address to make this change.
          </p>
        </div>
      </div>
    </div>
    <div class="form-body">
      <VButton
        :loading="loading"
        :disabled="loading"
        @click="postResetPassword"
        color="primary"
        icon="fe:lock"
        elevated
      >
        Reset Password
      </VButton>
    </div>
  </div>
</template>
