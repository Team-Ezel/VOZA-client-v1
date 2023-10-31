import { ChatBoxPropsType } from "@/types/components/common/ChatTypes"
import * as S from "./style"

export default function ChatBox({ id }: ChatBoxPropsType) {

    return (
        <S.ChatBoxWrapper>
            <S.ChatListWrapper>
                { }
            </S.ChatListWrapper>
            <S.ChatInputWrapper />
        </S.ChatBoxWrapper>
    )
}