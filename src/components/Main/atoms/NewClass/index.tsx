import * as S from './style'
import * as I from '@/assets/svgs'
function NewClassItem() {
  return (
    <S.NewClassWrapper>
      <S.InformationWrapper>
        <I.Add_circle />
        <p>만들기</p>
      </S.InformationWrapper>
    </S.NewClassWrapper>
  )
}
export default NewClassItem
