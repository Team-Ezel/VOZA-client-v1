import React from 'react'
import * as S from './style'
import Button from '@/components/Common/atoms/Button/Button'
import { createPortal } from 'react-dom'

const MemberBenModal = () => {
  return createPortal(
    <S.Main>
      <S.ModalWrapper>
        <S.Title>멤버 내보내기</S.Title>
        <S.Subtitle>정말로 이 멤버를 내보내실건가요?</S.Subtitle>
        <Button
          width='21.1875rem'
          height='2.6875rem'
          borderRadius='0.3125rem'
          background='#FF3120'
          color='#fff'
          border='none'
        >
          권한부여
        </Button>
      </S.ModalWrapper>
    </S.Main>,
    document.body,
  )
}

export default MemberBenModal
