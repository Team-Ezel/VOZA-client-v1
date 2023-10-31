import React, { useEffect, useState } from 'react'
import * as S from './style'
import { Add_outline } from '@/assets/svgs'
import ChatGroupList from '../ChatGroupList'
import useFetch from '@/hooks/useFetch'
import { MygroupList, MygroupListData } from '@/types/components/common/ChatTypes'
const ChatModal = () => {
  const { fetch, isLoading, data } = useFetch<MygroupList>({
    url: "/group/myGroups",
    method: "GET"
  })

  useEffect(() => {
    fetch();
  }, [fetch])


  return (
    <S.ChatModalWrapper>
      <S.ChatModalHeader>
        <h3>채팅</h3>
        <Add_outline />
      </S.ChatModalHeader>
      <S.ChatContent>
        <ChatGroupList data={data} />
      </S.ChatContent>
    </S.ChatModalWrapper>
  )
}

export default ChatModal
