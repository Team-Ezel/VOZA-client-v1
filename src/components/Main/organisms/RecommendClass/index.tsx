import { useEffect, useState } from 'react'
import { RecommendClassItemType } from '@/types/components/Main/RecommendClassType'
import RecommendClassList from '../../molecules/RecommendClassList'
import * as S from './style'
import useFetch from '@/hooks/useFetch'

function RecommendClass() {
  const { data, isLoading, fetch } = useFetch<RecommendClassItemType[]>({
    url: `/group/recommended`,
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [fetch])
  return (
    <S.RecommendClassWrapper>
      <S.RecommendClass>
        <S.titleWrapper>추천모임</S.titleWrapper>
        {!isLoading && data ? <RecommendClassList groupList={data} /> : null}
      </S.RecommendClass>
    </S.RecommendClassWrapper>
  )
}
export default RecommendClass
