<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { usePanels } from '/@src/stores/panels'
import { useUserSession } from '/@src/stores/userSession'

const darkmode = useDarkmode()
const { locale } = useI18n()
const panels = usePanels()

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})

const {
  user: { racha, score },
} = useUserSession()
</script>

<template>
  <div class="toolbar ml-auto">
    <div class="toolbar-link">
      <div
        class="icon-button"
        v-tooltip.bottom.bubble="'With 10 streaks you earn 30 coins!'"
      >
        <i aria-hidden="true" class="iconify" data-icon="emojione:fire" />
        <span class="icon-button__badge">{{
          `${racha?.toString?.length > 2 ? `${String(racha).slice(0, 2)}+` : `${racha}`}`
        }}</span>
      </div>
    </div>
    <div class="toolbar-link">
      <div
        class="icon-button"
        v-tooltip.bottom.bubble="'With 200 coins, access to the unit of the B1 course!'"
      >
        <i aria-hidden="true" class="iconify" data-icon="twemoji:coin" />
        <span class="icon-button__badge">{{
          `${score?.toString?.length > 2 ? `${String(score).slice(0, 2)}+` : `${score}`}`
        }}</span>
      </div>
    </div>
    <div class="toolbar-link">
      <label
        tabindex="0"
        class="dark-mode ml-auto"
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

    <a
      tabindex="0"
      class="toolbar-link right-panel-trigger"
      @keydown.space.prevent="panels.setActive('languages')"
      @click="panels.setActive('languages')"
    >
      <img :src="localFlagSrc" alt="" />
    </a>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.icon-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    width: 10px;
  }

  &:hover,
  &:focus {
    .icon-button__badge {
      opacity: 1;
    }
  }
}

.icon-button__badge {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 30px;
  height: 30px;
  font-size: 11px;
  background: var(--primary);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: bold;
  opacity: 0;
}
</style>
