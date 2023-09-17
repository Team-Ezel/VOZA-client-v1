import * as S from './style'
import { OtherClassFIlterItemPropsTypes } from '@/types/components/Main/OtherClassTypes'
function OtherClassFilterItem({ name, value }: OtherClassFIlterItemPropsTypes) {
  return (
      <S.OtherClassFilterItem>
        {name}
      </S.OtherClassFilterItem>
  )
}
export default OtherClassFilterItem