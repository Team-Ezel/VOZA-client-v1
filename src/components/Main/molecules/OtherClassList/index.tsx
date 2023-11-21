import * as S from './style'
import { useState } from 'react'
import { OtherClassListPropsTypes } from '@/types/components/Main/OtherClassTypes'
import OtherClassItem from '../../atoms/Item/OtherClassItem'
function OtherClassList({ content }: OtherClassListPropsTypes) {
  console.log(content)
  return (
    <S.OtherClassListWrapper>
      {content.map((item) => (
        <OtherClassItem
          key={item.groupList[0].groupId}
          groupName={item.groupList[0].groupName}
          url={item.groupList[0].url}
          tags={item.groupList[0].tags}
          groupId={item.groupList[0].groupId}
          leaderName={item.groupList[0].leaderName}
          members={item.groupList[0].members}
        />
      ))}
    </S.OtherClassListWrapper>
  )
}

export default OtherClassList
