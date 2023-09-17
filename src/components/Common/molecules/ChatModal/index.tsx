import React from 'react'
import * as S from './style'
import { Add_outline } from '@/assets/svgs'

const ChatModal = () => {
  return (
    <S.ChatModalWrapper>
      <S.ChatModalHeader>
        <h3>채팅</h3>
        <Add_outline />
      </S.ChatModalHeader>
      <S.ChatContent>
        <p> 현재 사용할수 없는 기능입니다.</p>
      </S.ChatContent>
    </S.ChatModalWrapper>
  )
}

export default ChatModal
