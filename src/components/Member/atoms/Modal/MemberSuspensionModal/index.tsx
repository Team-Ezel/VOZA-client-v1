import React, { useState } from 'react'
import * as S from './style'
import { createPortal } from 'react-dom'
import Button from '@/components/Common/atoms/Button/Button'
import { TimeFilterData } from '@/assets/data/TimeFilterData'
import TimeItem from '../../ModalItems/TimeItem'

type MemberSuspensionModalProps = {
  onClose: () => void
}

const MemberSuspensionModal: React.FC<MemberSuspensionModalProps> = ({
  onClose,
}) => {
  // 모달 바깥 영역을 클릭할 때 onClose 함수를 호출하여 모달을 닫음
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const [selectedTime, setSelectedTime] = useState('') // 선택된 타임을 관리

  const handleItemClick = (time: any) => {
    setSelectedTime(time) // 선택된 타임을 업데이트
  }

  return createPortal(
    <S.Main onClick={handleModalClick}>
      <S.ModalWrapper>
        <S.Title>멤버 임시정지</S.Title>
        <S.Subtitle>일정 시간동안 소모임에 들어올 수 없어요</S.Subtitle>
        <S.TimeTable>
          {TimeFilterData.map((item) => (
            <TimeItem
              time={item.time}
              key={item.uniqueId}
              isSelected={item.time === selectedTime}
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
        >
          임시정지
        </Button>
      </S.ModalWrapper>
    </S.Main>,
    document.body,
  )
}

export default MemberSuspensionModal
