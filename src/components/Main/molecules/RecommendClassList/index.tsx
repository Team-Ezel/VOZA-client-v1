import { useState } from 'react'
import { RecommendClassListType } from '@/types/components/Main/RecommendClassType'
import * as S from './style'
import RecommendClassItem from '../../atoms/Item/RecommendClassItem'

function RecommendClassList({ groupList }: RecommendClassListType) {
  return (
    <S.RecommendClassListWrapper>
      {groupList.map((data) => (
        <RecommendClassItem
          groupId={data.groupId}
          groupName={data.groupName}
          // introduction={data.introduction}
          url={data.url}
          key={data.groupId}
          members={data.members}
          tags={data.tags}
          leaderName={data.leaderName}
        />
      ))}
    </S.RecommendClassListWrapper>
  )
}

export default RecommendClassList
