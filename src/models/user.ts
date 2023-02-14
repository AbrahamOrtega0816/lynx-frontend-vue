export interface IUser {
  name: string
  last_name: string
  email: string
  english_level: any
  image: string
  role: string
  score: number
  identification: string
  phone: string
  age: string
  country: string
  racha?: string
  finished_courses?: number
}

export type IUserData = {
  user_id: number
  name: string
  racha: string
  score: number
  image: string
  role: string
}
