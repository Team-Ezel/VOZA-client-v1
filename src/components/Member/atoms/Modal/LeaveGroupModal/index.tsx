import React from 'react'
import * as S from './style'
import Button from '@/components/Common/atoms/Button/Button'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import axios from 'axios'

type LeaveGroupModalProps = {
  onClose: () => void
}

const LeaveGroupModal: React.FC<LeaveGroupModalProps> = ({
  onClose,
}) => {
  const baseurl = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const { id } = router.query

  const benMember = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!accessToken) {
        console.error('Access Token이 없습니다.')
        return
      }

      await axios.delete(`${baseurl}/group/${id}`, {
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
        <S.Title>소모임 탈퇴하기</S.Title>
        <S.Subtitle>정말로 소모임을 나가실건가요?</S.Subtitle>
        <Button
          width='21.1875rem'
          height='2.6875rem'
          borderRadius='0.3125rem'
          background='#FF3120'
          color='#fff'
          border='none'
          onClick={benMember}
        >
          탈퇴하기
        </Button>
      </S.ModalContainer>
    </S.Main>,
    document.body,
  )
}

export default LeaveGroupModal
