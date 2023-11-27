import { CalenderWeekListPropsTypes } from '@/types/components/common/Calender/CalenderType'
import * as S from './style'
import { CalenderWeekListData } from '@/assets/data/CalenderWeekListData'
export default function CalenderWeekList() {
  return (
    <S.CalenderWeekList>
      {CalenderWeekListData.map((i) => (
        <S.CalenderWeekItem key={i.name} color={i.color}>
          {i.name}
        </S.CalenderWeekItem>
      ))}
    </S.CalenderWeekList>
  )
}
