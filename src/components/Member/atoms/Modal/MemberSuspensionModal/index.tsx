import React from 'react'
import * as S from './style'
import { createPortal } from 'react-dom'
import Button from '@/components/Common/atoms/Button/Button'
import { TimeFilterData } from '@/assets/data/TimeFilterData'
import TimeItem from '../../ModalItems/TimeItem'

const MemberSuspensionModal = () => {
  return createPortal(
    <S.Main>
      <S.ModalWrapper>
        <S.Title>멤버 임시정지</S.Title>
        <S.Subtitle>일정 시간동안 소모임에 들어올 수 없어요</S.Subtitle>
        <S.TimeTable>
          {TimeFilterData.map((item) => (
            <TimeItem time={item.time} key={item.uniqueId} />
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
