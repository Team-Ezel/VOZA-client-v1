import { useRecoilState } from 'recoil'
import * as S from './style'
import { OtherClassFIlterItemPropsTypes } from '@/types/components/Main/OtherClassTypes'
import { otherClassFilter } from '@/atoms/atoms'
function OtherClassFilterItem({ name, value }: OtherClassFIlterItemPropsTypes) {
  const [otherClassFilterState,setOtherClassFilterState]=useRecoilState(otherClassFilter)
  const Color = otherClassFilterState===value;
  return (
      <S.OtherClassFilterItem onClick={()=>setOtherClassFilterState(value)} toColor={Color} >
        {name}
      </S.OtherClassFilterItem>
  )
}
export default OtherClassFilterItem
