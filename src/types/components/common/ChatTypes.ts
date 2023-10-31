
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
    chatState: number | null
    setChatState: React.Dispatch<React.SetStateAction<number | null>>
}

export interface ChatGroupItemPropsType {
    id: number
    groupName: string
    url: string
    chatState: number | null
    setChatState: React.Dispatch<React.SetStateAction<number | null>>
}

export interface ChatBoxPropsType {
    id: number
    chatState: number | null
    setChatState: React.Dispatch<React.SetStateAction<number | null>>
}