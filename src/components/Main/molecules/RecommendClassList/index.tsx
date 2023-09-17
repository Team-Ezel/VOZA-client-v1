import { useState } from 'react'
import { RecommendClassListType } from '@/types/components/Main/RecommendClassType'
import * as S from './style'
import RecommendClassItem from '../../atoms/RecommendClassItem'

function RecommendClassList({ RecommendClassList }: RecommendClassListType) {
  const [datas, setDatas] = useState(RecommendClassList)
  return (
    <S.RecommendClassListWrapper>
      {datas.map((data) => (
        <RecommendClassItem
          id={data.id}
          title={data.title}
          introduction={data.introduction}
          thumbnail={data.thumbnail}
          key={data.id}
        />
      ))}
    </S.RecommendClassListWrapper>
  )
}

export default RecommendClassList
