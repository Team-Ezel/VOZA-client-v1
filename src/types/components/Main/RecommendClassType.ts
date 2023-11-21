export type RecommendClassItemType = {
  groupId: number
  groupName: string
  url: string
  leaderName: string
  members: number
  tags: string[]
}

export type RecommendClassListType = {
  groupList: RecommendClassItemType[]
}
