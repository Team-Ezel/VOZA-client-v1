import React from 'react'
import * as S from './style'

type GroupItemProps = {
  GroupImgURL: string
  GroupName: string
}

const GroupItem = ({ GroupImgURL, GroupName }: GroupItemProps) => {
  return (
    <S.GroupItemContainer>
      <S.GroupImg
        style={{
          background: `url(${GroupImgURL}) lightgray 50% / cover no-repeat`,
        }}
      />
      <S.GroupName>{GroupName}</S.GroupName>
    </S.GroupItemContainer>
  )
}

export default GroupItem
