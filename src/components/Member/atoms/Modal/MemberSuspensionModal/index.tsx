import React, { useState } from 'react'
import * as S from './style'
import { createPortal } from 'react-dom'
import Button from '@/components/Common/atoms/Button/Button'
import { TimeFilterData } from '@/assets/data/TimeFilterData'
import TimeItem from '../../ModalItems/TimeItem'
import Router from 'next/router'

type MemberSuspensionModalProps = {
  onClose: () => void
  memberId: number
}

const MemberSuspensionModal: React.FC<MemberSuspensionModalProps> = ({
  onClose,
  memberId,
}) => {
  const baseurl = process.env.NEXT_PUBLIC_BASEURL
  const { id } = Router.query

  // 모달 바깥 영역을 클릭할 때 onClose 함수를 호출하여 모달을 닫음
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const [selectedTime, setSelectedTime] = useState('') // 선택된 타임을 관리

  const handleItemClick = (time: string) => {
    setSelectedTime(time) // 선택된 타임을 업데이트
  }

  const handleKickOutMember = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!selectedTime) {
        alert('시간을 선택하세요.')
        return
      }

      const apiUrl = `${baseurl}/group/${id}/member/${memberId}?kickOutTime=${selectedTime}`
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (response.status === 204) {
        // 멤버가 성공적으로 킥아웃됨
        onClose()
      }
    } catch (error) {
      // 네트워크 오류 또는 기타 예외 처리
    }
  }

  return createPortal(
    <S.Main onClick={handleModalClick}>
      <S.ModalContainer>
        <S.Title>멤버 임시정지</S.Title>
        <S.Subtitle>일정 시간동안 소모임에 들어올 수 없어요</S.Subtitle>
        <S.TimeTable>
          {TimeFilterData.map((item) => (
            <TimeItem
              time={item.time}
              key={item.uniqueId}
              benTime={item.benTime}
              isSelected={item.benTime === selectedTime}
              onItemClick={handleItemClick}
            />
          ))}
        </S.TimeTable>
        <Button
          width='21.1875rem'
          height='2.6875rem'
          borderRadius='0.3125rem'
          background='#3355CD'
          color='#fff'
          border='none'
          onClick={handleKickOutMember}
        >
          임시정지
        </Button>
      </S.ModalContainer>
    </S.Main>,
    document.body,
  )
}

export default MemberSuspensionModal
