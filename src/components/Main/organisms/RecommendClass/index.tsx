import { useEffect, useState } from 'react'
import { RecommendClassListType } from '@/types/components/Main/RecommendClassType'
import RecommendClassList from '../../molecules/RecommendClassList'
import * as S from './style'
import useFetch from '@/hooks/useFetch'

function RecommendClass() {
  const { data, isLoading, fetch } = useFetch<RecommendClassListType>({
    url: `/group/recoGroups`,
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [fetch])
  return (
    <S.RecommendClassWrapper>
      <S.RecommendClass>
        <S.titleWrapper>추천모임</S.titleWrapper>
        {!isLoading && data ? (
          <RecommendClassList groupList={data.groupList} />
        ) : null}
      </S.RecommendClass>
    </S.RecommendClassWrapper>
  )
}
export default RecommendClass
