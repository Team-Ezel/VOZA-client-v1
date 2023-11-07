import { CalenderMonthPropsTypes } from "@/types/components/Calender/CalenderType"
import * as S from "./style"
import * as I from "@/assets/svgs"

export default function CalenderChange({ month, onClick, type }: CalenderMonthPropsTypes) {

    return (
        <S.CalenderMonthWrapper>
            <S.monthButtonWrapper onClick={() => onClick(0)}>
                <I.Arrow_left />
            </S.monthButtonWrapper>
            {`${month}${type}`}
            <S.monthButtonWrapper onClick={() => onClick(1)} >
                <I.Arrow_right />
            </S.monthButtonWrapper>
        </S.CalenderMonthWrapper>
    )
}