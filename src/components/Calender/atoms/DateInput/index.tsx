import { DateInputPropsType } from "@/types/components/Calender/ScheduleTypes";
import * as S from "./style"

export default function DateInput({ type, width, height, fontSize, fontWeight, color, backgroundColor, placeHolder, border, borderRadius, value, setValue }: DateInputPropsType) {
    return (
        <S.InputWrapper>
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
                onChange={(e) => { setValue(e.target.value) }}
                value={value}
            />

        </S.InputWrapper>

    )
}