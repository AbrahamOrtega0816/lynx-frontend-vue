export interface IActivity {
  id: number
  created_at: number
  sections_id: number
  is_active: boolean
  type: string
  content: IContent[]
}

export interface IContent {
  id: number
  sort: number
  tittle: string
  options: IOption[]
}

export interface IOption {
  id: number
  name: string
  wrong: boolean
}
