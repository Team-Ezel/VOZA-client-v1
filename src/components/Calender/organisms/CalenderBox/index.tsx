import * as S from './style'
import React, { useState } from 'react'
import moment, { Moment as MomentTypes } from 'moment'
import buildCalendar from '@/utils/buildCalender'
import CalenderList from '../../molecules/CalenderList'
import CalenderWeekList from '../../atoms/CalenderWeek'
import CalenderMonth from '../../molecules/CalenderChange'
import { CalenderBoxPropsType } from '@/types/components/Calender/CalenderType'

export default function CalenderBox({ day, setDay }: CalenderBoxPropsType) {
  const [date, setdate] = useState<moment.Moment>(() => moment())
  const jumpToMonth = (num: number) =>
    num
      ? setdate(date.clone().add(30, 'day'))
      : setdate(date.clone().subtract(30, 'day'))
  let calender = buildCalendar(date)

  return (
    <S.CalenderBoxWrapper>
      <CalenderMonth
        month={date.format('MM')}
        onClick={jumpToMonth}
        type={'월'}
      />
      <S.CalenderLine BackgroundColor='#E2E2EE' />
      <CalenderWeekList />
      {calender.map((i, idx) => (
        <>
          <S.CalenderLine BackgroundColor='#F2F2F4' />
          <CalenderList
            data={i}
            key={idx}
            date={date}
            onClick={() => {
              setDay(Date)
            }}
          />
        </>
      ))}
    </S.CalenderBoxWrapper>
  )
}
