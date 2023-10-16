import React from 'react'
import * as S from './style'
import Button from '@/components/Common/atoms/Button/Button'
import { createPortal } from 'react-dom'

type MemberBenModalProps ={
  onClose: () => void;
}

const MemberBenModal: React.FC<MemberBenModalProps> = ({ onClose }) => {
  // 모달 바깥 영역을 클릭할 때 onClose 함수를 호출하여 모달을 닫음
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <S.Main onClick={handleModalClick}>
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
          내보내기
        </Button>
      </S.ModalWrapper>
    </S.Main>,
    document.body,
  )
}

export default MemberBenModal
