import React from 'react'
import * as S from './style'
import Button from '@/components/Common/atoms/Button/Button'
import { createPortal } from 'react-dom'

type AddAdminModalProps = {
  onClose: () => void
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({ onClose }) => {

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <S.Main onClick={handleModalClick}>
      <S.ModalWrapper>
        <S.Title>관리자 권한 부여</S.Title>
        <S.Subtitle>소모임에 대한 대부분의 권한이 생겨요!</S.Subtitle>
        <Button
          width='21.1875rem'
          height='2.6875rem'
          borderRadius='0.3125rem'
          background='#3355CD'
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

export default AddAdminModal
