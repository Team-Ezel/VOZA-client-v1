import { TitleBoxPropsType } from "@/types/components/common/TitleBoxType"
import * as S from "./style"

export default function TitleBox({ title, subTitle }: TitleBoxPropsType) {
    return (
        <S.TitleBoxWrapper>
            <S.TitleWrapper>{title}</S.TitleWrapper>
            <S.SubTitleWrapper>{subTitle}</S.SubTitleWrapper>
        </S.TitleBoxWrapper>
    )
}