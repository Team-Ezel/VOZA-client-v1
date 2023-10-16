import { categoryPropsType } from '@/types/components/Write/ContentsType'
import * as S from './style'
export default function Category({category,setCategory}:categoryPropsType) {
  return (
    <S.CategoryWrapper>
      <select value={category} onChange={(e)=>setCategory(e.target.value)} name='category'>
        <option value='NORMAL'>일반</option>
        <option value='NOTICE'>문의</option>
      </select>
    </S.CategoryWrapper>
  )
}
