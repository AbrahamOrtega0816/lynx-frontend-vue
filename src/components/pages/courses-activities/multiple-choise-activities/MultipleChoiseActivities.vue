<script setup lang="ts">
import { useFieldArray, Field } from 'vee-validate'
import { useWizard } from '/@src/composable/useWizard'
import { type IActivity } from '/@src/models/IActivities'
import { useMultipleChoiseActivities } from '/@src/stores/multipleChoiseActivities'
import { cloneDeep } from 'lodash'

const props = withDefaults(
  defineProps<{
    data: IActivity | null
    index: number
    form: any
  }>(),
  {
    data: null,
    index: 0,
    form: {},
  }
)
const wizard = useWizard()

const { setData, getCurrentData } = useMultipleChoiseActivities()

wizard.setStep({
  number: props?.index,
})

useFieldArray(`questions`)

watch(
  () => props.form.values,
  (values) => {
    setData(cloneDeep(values), wizard.step)
  },
  { deep: true }
)
watch(
  () => wizard.step,
  (newStep) => {
    props.form.resetForm({
      values: {
        ...getCurrentData(newStep),
      },
    })
  }
)
</script>
<template>
  <Transition name="fade-slow">
    <div class="form-section-inner">
      <h1 class="title is-5 mb-6">{{ data?.type }}</h1>
      <div class="mb-5" v-for="(questions, index) in data?.content" :key="index">
        <h1 class="title is-6">{{ questions.tittle }}</h1>
        <div class="options">
          <Field
            :name="`questions[${index}].radio`"
            v-slot="{ handleChange, field: { value } }"
          >
            <VField
              v-for="(option, _index) in questions.options"
              :key="_index"
              class="option"
            >
              <VInput
                raw
                type="radio"
                :checked="option.id === value"
                :name="`radio-activities-${index}`"
                :value="option.id"
                @change="handleChange"
              />
              <div class="indicator">
                <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i aria-hidden="true" class="lnil lnil-consulting"></i>
                <h4>{{ option.name }}</h4>
              </div>
            </VField>
          </Field>
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

.is-correct {
  border-color: var(--success) !important;

  h4 {
    color: var(--success) !important;
  }

  i {
    color: var(--success) !important;
  }
}

.is-wrong {
  border-color: var(--danger) !important;

  h4 {
    color: var(--danger) !important;
  }

  i {
    color: var(--danger) !important;
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
            border-color: var(--primary);

            i {
              color: var(--primary);
            }
          }
        }
      }

      .option-inner {
        background-color: var(--dark-sidebar-light-2);
        border-color: var(--dark-sidebar-light-12);

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
