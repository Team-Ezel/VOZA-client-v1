export interface NewClassModalStateType {
  modal: boolean
  page: 'category' | 'name' | 'profile'
  category: string[]
  name: string
  profile: any
}
