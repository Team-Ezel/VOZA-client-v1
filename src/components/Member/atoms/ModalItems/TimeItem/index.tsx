import React from 'react'
import * as S from './style'
import { TimeItemProps } from '@/types/components/Modal/TimeItemProps'

const TimeItem = ({ time }: TimeItemProps) => {
  return (
    <S.TimeItem >
      <S.Timetext>{time}</S.Timetext>
    </S.TimeItem>
  )
}

export default TimeItem
