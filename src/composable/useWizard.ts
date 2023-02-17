import type { InjectionKey } from 'vue'

/**
 * Using typescript types allow better developer experience
 * with autocompletion and compiler error prechecking
 */
import sleep from '/@src/utils/sleep'

interface WizardStepOptions {
  number?: number
  steps?: number
  disabled?: Array<boolean>
  valid?: Array<boolean>
}
export type WizardContext = ReturnType<typeof createWizardContext>
export const useWizardSymbolContext = Symbol('wizard') as InjectionKey<WizardContext>

function createWizardContext() {
  const step = ref(0)
  const valid = ref([false])
  const disabled = ref([false])
  const steps = ref(1)
  const loading = ref(false)

  const previousStepFn = () => {
    if (step.value > 0) step.value = step.value - 1
  }

  const validateStepFn = () => {
    if (!valid.value[step.value]) {
      valid.value[step.value] = true
      return
    }
    if (step.value < steps.value) step.value = step.value + 1
  }

  function setStep(options?: WizardStepOptions) {
    step.value = options?.number || 0
  }

  function setSteps(options?: WizardStepOptions) {
    steps.value = options?.steps || 1
  }

  async function save() {
    loading.value = true

    // simulate saving data
    await sleep(2000)

    loading.value = false
  }

  return reactive({
    previousStepFn,
    validateStepFn,
    step,
    steps,
    valid,
    disabled,
    setStep,
    save,
    setSteps,
  })
}

export function useWizard() {
  let context = inject(useWizardSymbolContext, undefined)
  if (!context) {
    context = createWizardContext()
    provide(useWizardSymbolContext, context)
  }
  return context
}
