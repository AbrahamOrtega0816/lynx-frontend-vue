<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import { authService } from '/@src/services'
const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const notyf = useNotyf()
const userSession = useUserSession()

const validationSchema = markRaw(
  yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
)

const form = reactive(
  useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
  })
)

const AsyncField = defineAsyncComponent({
  loader: async () => Field,
})

const handleLogin = async () => {
  const {
    meta: { valid },
    values,
  } = form

  if (valid) {
    isLoading.value = true

    await authService
      .postLogin(values)
      .then(async (res) => {
        if (res.status === 200) {
          const {
            data: { authToken, name, user_id },
          } = res
          userSession.setToken(authToken)
          userSession.setUser({ name, user_id })
          router.push('/courses')
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
}

useHead({
  title: "Auth Login - Let'z",
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink to="/" class="header-item">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
      </div>
      <div class="right">
        <label
          class="dark-mode ml-auto"
          tabindex="0"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
        >
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          />
          <span></span>
        </label>
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>Welcome Back.</h2>
          <p>Please sign in to your account</p>
          <RouterLink to="/auth/signup"> I do not have an account yet </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form @submit.prevent="handleLogin">
            <div class="login-form">
              <AsyncField v-slot="{ handleChange, field }" :name="`email`">
                <VField>
                  <VControl icon="feather:user">
                    <VInput
                      name="email"
                      type="text"
                      placeholder="Username"
                      :model-value="field?.value"
                      @update:model-value="handleChange"
                    />
                  </VControl>
                </VField>
              </AsyncField>
              <AsyncField v-slot="{ handleChange, field }" :name="`password`">
                <VField>
                  <VControl icon="feather:lock">
                    <VInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      :model-value="field?.value"
                      @update:model-value="handleChange"
                    />
                  </VControl>
                </VField>
              </AsyncField>

              <!-- Submit -->
              <div class="login">
                <VButton
                  :disabled="!form.meta.valid"
                  :loading="isLoading"
                  type="submit"
                  color="primary"
                  bold
                  fullwidth
                  raised
                >
                  Sign In
                </VButton>
              </div>
            </div>
          </form>
        </div>

        <div class="forgot-link has-text-centered">
          <a>Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>
