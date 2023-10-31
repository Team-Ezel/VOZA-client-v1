
export interface MygroupList {
    groupList: {
        groupId: number
        groupName: string
        url: string
        leaderName: string
        members: number
    }[]

}

export interface MygroupListData {
    data: MygroupList,

}


export interface ChatGroupListPropsType {
    data: MygroupList | null
}

export interface ChatGroupItemPropsType {
    id: number,
    groupName: string,
    url: string
}