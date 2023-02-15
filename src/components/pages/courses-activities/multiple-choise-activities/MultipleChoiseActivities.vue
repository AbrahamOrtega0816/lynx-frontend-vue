<script setup lang="ts">
import { useWizard } from '/@src/composable/useWizard'
import { IActivity } from '/@src/models/IActivities'

const props = withDefaults(
  defineProps<{
    data: IActivity | null
    index: number
  }>(),
  {
    data: null,
    index: 0,
  }
)

const wizard = useWizard()

wizard.setStep({
  number: props?.index,
})
</script>
<template>
  <Transition name="fade-slow">
    <div class="form-section-inner">
      <div class="mb-5" v-for="(questions, index) in data?.content" :key="index">
        <h1 class="title is-4">{{ questions.tittle }} ?</h1>
        <div class="options">
          <VField
            v-for="(option, _index) in questions.options"
            :key="_index"
            class="option"
          >
            <VInput raw type="radio" :name="`radio-activities-${index}`" />
            <div class="indicator">
              <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
            </div>
            <div class="option-inner">
              <i aria-hidden="true" class="lnil lnil-consulting"></i>
              <h4>{{ option.name }}</h4>
            </div>
          </VField>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.options {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  .option {
    position: relative;
    width: calc(33.3% - 1rem);
    margin: 0.5rem;

    &:focus-within {
      border-radius: 4px;
      outline-offset: var(--accessibility-focus-outline-offset);
      outline-width: var(--accessibility-focus-outline-width);
      outline-style: var(--accessibility-focus-outline-style);
      outline-color: var(--accessibility-focus-outline-color);
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      opacity: 0;
      cursor: pointer;

      &:checked {
        ~ .indicator {
          transform: scale(1);
        }

        ~ .option-inner {
          border-color: var(--primary);
          box-shadow: var(--light-box-shadow);
          text-align: center;

          i {
            color: var(--primary);
          }
        }
      }
    }

    .indicator {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      color: var(--white);
      background: var(--primary);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.3s;

      svg {
        height: 14px;
        width: 14px;
        stroke-width: 3px;
      }
    }

    .option-inner {
      padding: 1.5rem;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      transition: border 0.3s, box-shadow 0.3s;
      text-align: center;

      h4 {
        color: var(--dark-text);
        font-weight: 600;
        font-family: var(--font-alt);
      }

      p {
        font-size: 0.9rem;
      }

      i {
        font-size: 2.25rem;
        color: var(--light-text);
        margin-bottom: 0.25rem;
      }
    }
  }
}

.is-dark {
  .options {
    .option {
      .indicator {
        background: var(--primary);
      }

      input {
        &:checked {
          ~ .indicator {
            transform: scale(1);
          }

          ~ .option-inner {
            border-color: var(--primary) !important;

            i {
              color: var(--primary);
            }
          }
        }
      }

      .option-inner {
        background-color: var(--dark-sidebar-light-2) !important;
        border-color: var(--dark-sidebar-light-12) !important;

        h4 {
          color: var(--dark-dark-text);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .options {
    .option {
      width: calc(50% - 1rem);
    }
  }
}
</style>
