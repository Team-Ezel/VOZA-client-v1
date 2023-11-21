import * as S from './style'
import { useEffect, useState } from 'react'
import { OtherClassListPropsTypes } from '@/types/components/Main/OtherClassTypes'
import OtherClassList from '../../molecules/OtherClassList'
import OtherClassFilter from '../../molecules/OtherClassFilter'
import useFetch from '@/hooks/useFetch'

function OtherClass() {
  const { data, isLoading, fetch } = useFetch<OtherClassListPropsTypes>({
    url: `/group/otherGroups?pageSize=0`,
    method: 'GET',
  })
  useEffect(() => {
    fetch()
  }, [fetch])
  return (
    <S.OtherClassWrapper>
      <S.titleWrapper>
        <span>광주</span> 소모임
      </S.titleWrapper>
      <OtherClassFilter />
      {!isLoading && data ? <OtherClassList content={data.content} /> : null}
    </S.OtherClassWrapper>
  )
}

export default OtherClass
