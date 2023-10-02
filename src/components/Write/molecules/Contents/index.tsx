import Category from '../../atoms/Category'
import ContentInput from '../../atoms/ContentInput'
import NameInput from '../../atoms/NameInput'
import * as S from './style'

export default function Contents() {
  return (
    <S.contentsWrapper>
      <S.contentWrapper>
        <S.NameWrapper>제목</S.NameWrapper>
        <NameInput/>
      </S.contentWrapper>
      <S.contentWrapper>
        <S.NameWrapper>카테고리</S.NameWrapper>
        <Category/>
      </S.contentWrapper>
      <S.contentWrapper>
        <ContentInput/>
      </S.contentWrapper>
    </S.contentsWrapper>
  )
}
