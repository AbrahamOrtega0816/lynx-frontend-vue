import { markRaw } from 'vue'
import * as yup from 'yup'

export interface IQuestions {
  answers: number | null
}

export interface multipleChoiseForm {
  questions: IQuestions[]
}

export const multipleChoiseSchema = markRaw(
  yup.object({
    questions: yup.array().of(
      yup.object().shape({
        answers: yup
          .number()
          .min(1)
          .required()
          .test('onlyNumber', 'Number', (val) => (val ? Number(val) > 0 : true))
          .defined(),
      })
    ),
  })
)

export const questionsValues = {
  answers: null,
}

export const multipleChoiseInitialValues: multipleChoiseForm = {
  questions: [questionsValues],
}
