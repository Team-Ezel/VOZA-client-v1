import React from 'react'
import * as S from './style'
import Button from '@/components/Common/atoms/Button/Button'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import axios from 'axios'

type AddAdminModalProps = {
  memberId: number
  onClose: () => void
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({ memberId, onClose }) => {
  const baseurl = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const { id } = router.query

  const updateAdmin = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!accessToken) {
        console.error('Access Token이 없습니다.')
        return
      }

      await axios.patch(`${baseurl}/group/${id}/member/grant/${memberId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <S.Main onClick={handleModalClick}>
      <S.ModalContainer>
        <S.Title>관리자 권한 부여</S.Title>
        <S.Subtitle>소모임에 대한 대부분의 권한이 생겨요!</S.Subtitle>
        <Button
          width='21.1875rem'
          height='2.6875rem'
          borderRadius='0.3125rem'
          background='#3355CD'
          color='#fff'
          border='none'
          onClick={() => {
            updateAdmin()
            onclose
          }}
        >
          권한부여
        </Button>
      </S.ModalContainer>
    </S.Main>,
    document.body,
  )
}

export default AddAdminModal
