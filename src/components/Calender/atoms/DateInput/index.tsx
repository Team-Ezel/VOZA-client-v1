import { DateInputPropsType } from '@/types/components/common/Calender/ScheduleTypes'
import * as S from './style'
import * as I from '@/assets/svgs'
export default function DateInput({
  type,
  width,
  height,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  placeHolder,
  border,
  borderRadius,
  value,
  setValue,
}: DateInputPropsType) {
  return (
    <S.InputWrapper>
      <S.SvgWrapper>
        {type === 'Date' ? <I.Calender_2 /> : null}
        {type === 'Time' ? <I.Timer /> : null}
      </S.SvgWrapper>
      <S.DateInput
        placeholder={placeHolder}
        width={width}
        height={height}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        backgroundColor={backgroundColor}
        border={border}
        borderRadius={borderRadius}
        onChange={(e) => {
          setValue(
            type === 'Date'
              ? e.target.value.replace(/[^0-9-]/gi, '')
              : e.target.value.replace(/[^0-9:]/gi, ''),
          )
        }}
        value={value}
        type='text'
        maxLength={type === 'Date' ? 10 : 5}
      />
    </S.InputWrapper>
  )
}
