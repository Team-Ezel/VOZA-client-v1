import { RecommendClassItemType } from '@/types/components/Main/RecommendClassType'
import * as I from '@/assets/svgs'
import * as S from './style'
import { useRouter } from 'next/router'

function RecommendClassItem({
  groupId,
  groupName,
  url,
  leaderName,
  members,
  tags,
}: RecommendClassItemType) {
  const router = useRouter()
  return (
    <S.RecommendClassItemWrapper>
      <S.thumbnailWrapper>
        <img src={url} alt='이미지' />
      </S.thumbnailWrapper>
      <S.InformationWrapper>
        <S.TitleWrapper>{groupName}</S.TitleWrapper>
        <p>{'introduction'}</p>
        <S.DetailClassButton onClick={() => router.push(`/group/${groupId}`)}>
          모임 살펴보기
          <I.Arrow_down_dill />
        </S.DetailClassButton>
      </S.InformationWrapper>
    </S.RecommendClassItemWrapper>
  )
}
export default RecommendClassItem
