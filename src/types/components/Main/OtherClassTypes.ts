export type OtherClassItemTypes = {
  groupId: number
  groupName: string
  url: string
  leaderName: string
  members: number
  tags: string[]
}

export type groupListType = {
  groupList: OtherClassItemTypes
}

export type OtherClassListPropsTypes = {
  content: groupListType[]
}

export type OtherClassListDataType = {
  content: OtherClassListPropsTypes
}

export type OtherClassFIlterItemPropsTypes = {
  name: string
  value: string
}
