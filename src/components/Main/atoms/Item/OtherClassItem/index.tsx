import * as S from './style'
import { OtherClassItemTypes } from '@/types/components/Main/OtherClassTypes'
function OtherClassItem({
  groupId,
  groupName,
  url,
  tags,
}: OtherClassItemTypes) {
  return (
    <S.OtherClassItemWrapper>
      <S.thumbnailWrapper>
        <img src={url} alt='이미지' />
      </S.thumbnailWrapper>
      <S.InformationWrapper>
        <S.TitleWrapper>{groupName}</S.TitleWrapper>
        <p>{''}</p>
        <S.TagsLIstWrapper>
          {tags.map((item) => (
            <S.TagsItemWrapper key={item}>{item}</S.TagsItemWrapper>
          ))}
        </S.TagsLIstWrapper>
      </S.InformationWrapper>
    </S.OtherClassItemWrapper>
  )
}
export default OtherClassItem
