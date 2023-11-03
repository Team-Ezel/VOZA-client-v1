import * as S from './style'
import { MyClassItemPropsTypes } from '@/types/components/Main/MyClassType'
import * as I from '@/assets/svgs'
function MyClassItem({
  id,
  title,
  leader,
  member,
  thumbnail,
}: MyClassItemPropsTypes) {
  return (
    <S.MyClassItemWrapper>
      <S.thumbnailWrapper>
        <img src={thumbnail} />
      </S.thumbnailWrapper>
      <S.InformationWrapper>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <p>{`리더 - ${leader}`}</p>
        <p>{`멤버 ${member}`}</p>
      </S.InformationWrapper>
    </S.MyClassItemWrapper>
  )
}
export default MyClassItem
