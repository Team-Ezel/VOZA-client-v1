import { ScheduleOptionItemPropsType } from '@/types/components/common/Calender/ScheduleTypes'
import * as S from './style'

export default function ScheduleOptionItem({
  title,
  children,
}: ScheduleOptionItemPropsType) {
  return (
    <S.OptionItemWrapper>
      <S.OptionTitle>{title}</S.OptionTitle>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.OptionItemWrapper>
  )
}
