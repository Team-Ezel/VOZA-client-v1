import * as S from './style'
export default function Category() {
  return (
    <S.CategoryWrapper>
      <select name='category'>
        <option value='NORMAL'>일반</option>
        <option value='NOTICE'>문의</option>
      </select>
    </S.CategoryWrapper>
  )
}
