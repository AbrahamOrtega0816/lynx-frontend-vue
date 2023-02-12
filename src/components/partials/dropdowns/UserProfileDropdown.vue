<script setup lang="ts">
import { useUserSession } from '/@src/stores/userSession'
const router = useRouter()
const {
  user: { name, image },
  logoutUser,
} = useUserSession()

const loading = ref(false)

const logout = async () => {
  loading.value = true
  logoutUser()
  router.push('/')
}

const redirect = (route: string) => router.push(route)
</script>
<template>
  <VDropdown right spaced class="user-dropdown profile-dropdown">
    <template #button="{ toggle }">
      <a
        tabindex="0"
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @keydown.space.prevent="toggle"
        @click="toggle"
      >
        <VAvatar :picture="image" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <VAvatar size="large" :picture="image" />
        <div class="meta">
          <span class="is-capitalize">{{ name }}</span>
          <span>Product Manager</span>
        </div>
      </div>

      <div @click="redirect('/profile')" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-user-alt"></i>
        </div>
        <div class="meta">
          <span>Profile</span>
          <span>View your profile</span>
        </div>
      </div>

      <hr class="dropdown-divider" />
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Account settings</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <div class="dropdown-item is-button">
        <VButton
          class="logout-button"
          icon="feather:log-out"
          color="primary"
          role="menuitem"
          raised
          fullwidth
          :loading="loading"
          :disabled="loading"
          @click="logout()"
        >
          Logout
        </VButton>
      </div>
    </template>
  </VDropdown>
</template>
