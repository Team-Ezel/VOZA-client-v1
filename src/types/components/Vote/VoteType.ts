export type VoteType = {
  VoteId: number
  title: string
  author: string
  createdDate: string
  voteOptions: Option[]
}

type Option = {
  id: number
  option: string
  count: number
}
