import * as S from './style'
import { OtherClassItemTypes } from '@/types/components/common/OtherClassTypes'
function OtherClassItem({
  id,
  title,
  introduction,
  thumbnail,
  tags,
}: OtherClassItemTypes) {
  const tag = tags.split(' ')
  return (
    <S.OtherClassItemWrapper>
      <S.thumbnailWrapper>
        <img src={thumbnail} alt='이미지' />
      </S.thumbnailWrapper>
      <S.InformationWrapper>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <p>{introduction}</p>
        <S.TagsLIstWrapper>
          {tag.map((item) => (
            <S.TagsItemWrapper key={item}>{item}</S.TagsItemWrapper>
          ))}
        </S.TagsLIstWrapper>
      </S.InformationWrapper>
    </S.OtherClassItemWrapper>
  )
}
export default OtherClassItem
