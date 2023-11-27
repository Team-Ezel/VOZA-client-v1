import { CalenderItemPropsTypes } from '@/types/components/common/Calender/CalenderType'
import * as S from './style'

export default function CalenderItem({
  data,
  onClick,
}: CalenderItemPropsTypes) {
  let day = data._d?.getDate()
  const date = new Date()
  const CurrentDate =
    `${data._d?.getFullYear()}${data._d?.getMonth()}${data._d?.getDate()}` ==
    `${date.getFullYear()}${date.getMonth()}${date.getDate()}`

  return (
    <S.CalenderItemWrapper onClick={onClick}>
      <S.nameWrapper
        color={CurrentDate ? '#fff' : '#000000'}
        backgroundColor={CurrentDate ? '#2B65D9' : '#fff'}
      >
        {day && day}
      </S.nameWrapper>
    </S.CalenderItemWrapper>
  )
}
