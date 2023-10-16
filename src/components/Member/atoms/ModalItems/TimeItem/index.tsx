import React, { useState } from 'react'
import * as S from './style'
import { TimeItemProps } from '@/types/components/Modal/TimeItemProps'

const TimeItem = ({ time, isSelected, onItemClick }: TimeItemProps) => {
  const handleItemClick = () => {
    onItemClick(time) // 부모 컴포넌트에 선택된 타임을 알립니다.
  }

  return (
    <S.TimeItem
      onClick={handleItemClick}
      style={{
        backgroundColor: isSelected ? '#656B80' : '#f7f8fa',
      }}
    >
      <S.Timetext style={{ color: isSelected ? '#fff' : '#999' }}>
        {time}
      </S.Timetext>
    </S.TimeItem>
  )
}

export default TimeItem
