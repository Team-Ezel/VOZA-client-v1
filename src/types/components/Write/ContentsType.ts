export type ContentsPropsType = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
    contents: string
    setContents: React.Dispatch<React.SetStateAction<string>>
}

export type nameInputPropsType = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
}

export type categoryPropsType = {
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
}


export interface ToolbarPropsType {
    contents: string
    setContents: React.Dispatch<React.SetStateAction<string>>
}
export type contentsPropsType = {
    contents: string
    setContents: React.Dispatch<React.SetStateAction<string>>
}