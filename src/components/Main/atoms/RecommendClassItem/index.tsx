import { RecommendClassItemType } from '@/types/components/Main/RecommendClassType'
import * as I from "@/assets/svgs";
import * as S from './style'

function RecommendClassItem({
  id,
  title,
  introduction,
  thumbnail,
}: RecommendClassItemType) {
  return (
    <S.RecommendClassItemWrapper>
      <S.thumbnailWrapper>
        <img src={thumbnail} alt='이미지' />
      </S.thumbnailWrapper>
      <S.InformationWrapper>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <p>{introduction}</p>
        <S.DetailClassButton>
          모임 살펴보기
          <I.Arrow_down_dill/>
        </S.DetailClassButton>
      </S.InformationWrapper>
    </S.RecommendClassItemWrapper>
  )
}
export default RecommendClassItem
