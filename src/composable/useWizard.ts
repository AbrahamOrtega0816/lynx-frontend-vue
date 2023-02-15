import type { InjectionKey } from 'vue'

/**
 * Using typescript types allow better developer experience
 * with autocompletion and compiler error prechecking
 */
import type { WizardData } from '/@src/models/wizard'
import sleep from '/@src/utils/sleep'

interface WizardStepOptions {
  number?: number
  steps?: number
}

export type WizardContext = ReturnType<typeof createWizardContext>
export const useWizardSymbolContext = Symbol('wizard') as InjectionKey<WizardContext>

function createWizardContext() {
  const step = ref(0)
  const steps = ref(1)
  const loading = ref(false)
  const canNavigate = ref(false)

  const previousStepFn = () => {
    if (step.value > 0) step.value--
  }

  const validateStepFn = () => {
    if (step.value < steps.value) step.value++
  }

  const data = reactive<WizardData>({
    name: '',
    description: '',
    relatedTo: 'UI/UX Design',
    logo: null,
    timeFrame: ref({
      start: new Date(),
      end: new Date(),
    }),
    budget: '< 5K',
    attachments: [],
    teammates: [],
    tools: [],
    customer: null,
  })

  function setLoading(value: boolean) {
    loading.value = value
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

  function reset() {
    data.name = ''
    data.description = ''
    data.relatedTo = 'UI/UX Design'
    data.logo = null
    data.timeFrame = {
      start: new Date(),
      end: new Date(),
    }
    data.budget = '< 5K'
    data.attachments = []
    data.teammates = []
    data.tools = []
    data.customer = null
  }

  return reactive({
    canNavigate,
    previousStepFn,
    validateStepFn,
    step,
    steps,
    loading,
    data,
    setLoading,
    setStep,
    save,
    reset,
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
