import React from 'react'
import * as S from './style'
import { GroupInfoItemProps } from '@/types/components/common/GroupInfoItemProps'

function GroupInfoItem({ url, name }: GroupInfoItemProps) {
  const imgStyle = {
    background: `url(${url}) lightgray 50% / cover no-repeat`,
  }

  return (
    <S.InfoContainer>
      <S.ImgContainer style={imgStyle}>
      </S.ImgContainer>
      <S.GroupName>{name}</S.GroupName>
    </S.InfoContainer>
  )
}

export default GroupInfoItem
