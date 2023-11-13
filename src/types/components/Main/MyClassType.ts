export interface groupList {
  groupId: number
  groupName: string
  leaderName: string
  members: number
  url: string
}

export interface MyClassData {
  groupList: groupList[]
}

export type MyClassItemPropsTypes = {
  id: number
  title: string
  leader: string
  member: number
  thumbnail: string
}
export type MyClassListPropsTypes = {
  datas: MyClassData | null
  isLoading: boolean
}
