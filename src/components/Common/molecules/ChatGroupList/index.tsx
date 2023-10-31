import { ChatGroupListPropsType } from "@/types/components/common/ChatTypes"
import * as S from "./style"
import ChatGroupItem from "../../atoms/ChatGroupItem"

export default function ChatGroupList({ data, chatState, setChatState }: ChatGroupListPropsType) {
    return (
        <S.ChatGroupListWrapper>
            {
                data && data.groupList.map((i) => (
                    <ChatGroupItem
                        key={i.groupId}
                        id={i.groupId}
                        groupName={i.groupName}
                        url={i.url}
                        chatState={chatState}
                        setChatState={setChatState}
                    />
                ))
            }
        </S.ChatGroupListWrapper>
    )
}