import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import axios from 'axios'
import * as S from './style'
import Button from '@/components/Common/atoms/Button/Button'
import useFetch from '@/hooks/useFetch'

type GroupCodeModalProps = {
  onClose: () => void
}

const GroupCodeModal: React.FC<GroupCodeModalProps> = ({ onClose }) => {
  const baseurl = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const { id } = router.query

  // Use a more specific type for data
  const { isLoading, fetch, data } = useFetch<string | null>({
    url: `${baseurl}/group/${id}`,
    method: 'POST',
  })

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const copyToClipboard = async () => {
    try {
      if (data !== null) {
        await navigator.clipboard.writeText(data)
        // Optional: Add a feedback message or some UI update after successful copy
        alert('초대코드가 클립보드에 복사되었습니다.')
      }
    } catch (error) {
      console.error('클립보드 복사 실패:', error)
      // Optional: Display an error message to the user
      alert('초대코드를 클립보드에 복사하는 동안 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    // Fetch data when the component mounts
    fetch()
  }, [])

  return createPortal(
    <S.Main onClick={handleModalClick}>
      <S.ModalContainer>
        <S.Title>초대코드</S.Title>
        <S.CodeBox>
          <p>{data ? data : '권한이 없습니다'}</p>
        </S.CodeBox>
        <Button
          width='21.1875rem'
          height='2.6875rem'
          borderRadius='0.3125rem'
          background='#3355CD'
          color='#fff'
          border='none'
          onClick={copyToClipboard}
        >
          복사하기
        </Button>
      </S.ModalContainer>
    </S.Main>,
    document.body,
  )
}

export default GroupCodeModal
