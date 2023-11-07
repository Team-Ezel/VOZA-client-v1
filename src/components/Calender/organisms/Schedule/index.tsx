import { SchedulePropsType } from '@/types/components/Calender/ScheduleTypes'
import CalenderChange from '../../molecules/CalenderChange'
import ScheduleList from '../../molecules/ScheduleList'
import * as S from './style'

export default function Schedule({ day, setDay }: SchedulePropsType) {
  const jumpToDay = (num: number) =>
    num
      ? setDay(day.clone().add(1, 'day'))
      : setDay(day.clone().subtract(1, 'day'))

  return (
    <S.ScheduleWrapper>
      <CalenderChange month={day.format('DD')} onClick={jumpToDay} type='일' />
      <S.Line />
      <ScheduleList day={day.format('yyyy-MM')} />
    </S.ScheduleWrapper>
  )
}
