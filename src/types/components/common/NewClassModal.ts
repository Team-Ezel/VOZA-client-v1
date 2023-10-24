export interface NewClassModalStateType {
    modal: boolean
    page: 'category' | 'name' | 'profile'
}

export interface NewClassModalState {
    groupName: string
    introduceGroup: string
    region: string
    tags: string[]
}