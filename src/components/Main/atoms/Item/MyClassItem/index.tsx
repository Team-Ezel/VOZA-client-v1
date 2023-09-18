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
        <img src='https://s3.ap-northeast-2.amazonaws.com/gimuwiki/file/c5c1e8ce-61d6-4998-8a58-11e712e67eac.jpg'/>
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
