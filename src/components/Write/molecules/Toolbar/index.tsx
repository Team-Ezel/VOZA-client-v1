import { ToolbarPropsType } from "@/types/components/Write/ContentsType"
import { ToolbarListData } from "@/assets/data/ToolbarListData"
import * as S from "./style"
import * as I from "@/assets/svgs"

export default function Toolbar({ contents, setContents }: ToolbarPropsType) {
    return (
        <S.ToolbarWrapper>
            <S.ToolbarSectionWrapper>
                {ToolbarListData.filter((i) => i.section === 1).map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
            </S.ToolbarSectionWrapper>
            <S.ToolbarLine />
            <S.ToolbarSectionWrapper>
                {ToolbarListData.filter((i) => i.section === 2).map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
            </S.ToolbarSectionWrapper>
            <S.ToolbarLine />
            <S.ToolbarSectionWrapper>
                {ToolbarListData.filter((i) => i.section === 3).map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
            </S.ToolbarSectionWrapper>
        </S.ToolbarWrapper>
    )
}