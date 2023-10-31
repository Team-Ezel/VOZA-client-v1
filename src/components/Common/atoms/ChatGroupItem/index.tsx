import { ChatGroupItemPropsType } from "@/types/components/common/ChatTypes"
import * as S from "./style"

export default function ChatGroupItem({ id, groupName, url }: ChatGroupItemPropsType) {
    return (
        <S.ChatGroupItemWrapper>
            <S.ImageWrapper src={url} />
            <S.TitleWrapper>
                <S.Title>{groupName}</S.Title>
                <S.ChatPreviewWrapper>
                    { }
                </S.ChatPreviewWrapper>
            </S.TitleWrapper>

        </S.ChatGroupItemWrapper>
    )
}