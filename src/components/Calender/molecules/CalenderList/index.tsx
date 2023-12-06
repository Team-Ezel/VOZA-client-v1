import { CalenderListPropsTypes } from '@/types/components/Calender/CalenderType'
import CalenderItem from '../../atoms/CalenderItem'
import { Moment } from 'moment'
import * as S from './style'

export default function CalenderList({
  data,
  date,
  onClick,
}: CalenderListPropsTypes) {
  return (
    <S.CalenderListWrapper>
      {data.map((i, idx) => (
        <CalenderItem data={i} onClick={onClick} key={idx} date={date} />
      ))}
    </S.CalenderListWrapper>
  )
}
