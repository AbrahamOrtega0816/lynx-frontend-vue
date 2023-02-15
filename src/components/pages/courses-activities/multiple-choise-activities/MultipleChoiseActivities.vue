<script setup lang="ts">
import { IActivity } from '/@src/models/IActivities'

const props = withDefaults(
  defineProps<{
    data: IActivity | null
  }>(),
  {
    data: null,
  }
)
</script>
<template>
  <Transition name="fade-slow">
    <div class="form-section-inner">
      <div class="options">
        <VField class="option">
          <VInput raw type="radio" name="radio-multi" />
          <div class="indicator">
            <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
          </div>
          <div class="option-inner">
            <i aria-hidden="true" class="lnil lnil-consulting"></i>
            <h4>Double check</h4>
            <p>Second control pass</p>
          </div>
        </VField>

        <VField class="option">
          <VInput raw type="radio" name="radio-multi" />
          <div class="indicator">
            <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
          </div>
          <div class="option-inner">
            <i aria-hidden="true" class="lnil lnil-tie"></i>
            <h4>Agent</h4>
            <p>Dedicated agent</p>
          </div>
        </VField>

        <VField class="option">
          <VInput raw type="radio" name="radio-multi" />
          <div class="indicator">
            <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
          </div>
          <div class="option-inner">
            <i aria-hidden="true" class="lnil lnil-handshake"></i>
            <h4>Insurance</h4>
            <p>Level 1-3 goods</p>
          </div>
        </VField>

        <VField class="option">
          <VInput raw type="radio" name="radio-multi" />
          <div class="indicator">
            <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
          </div>
          <div class="option-inner">
            <i aria-hidden="true" class="lnil lnil-licencse"></i>
            <h4>Extension</h4>
            <p>License extension</p>
          </div>
        </VField>

        <VField class="option">
          <VInput raw type="radio" name="radio-multi" />
          <div class="indicator">
            <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
          </div>
          <div class="option-inner">
            <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
            <h4>BI Reports</h4>
            <p>Custom made reports</p>
          </div>
        </VField>

        <VField class="option">
          <VInput raw type="radio" name="radio-multi" />
          <div class="indicator">
            <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
          </div>
          <div class="option-inner">
            <i aria-hidden="true" class="lnil lnil-customer"></i>
            <h4>Metrics</h4>
            <p>Setup live metrics</p>
          </div>
        </VField>
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
