import { ScheduleItemPropsTypes } from "@/types/components/Calender/ScheduleTypes"
import * as S from "./style"
import * as I from "@/assets/svgs"

export default function ScheduleItem({ id, title, startDate, endDate }: ScheduleItemPropsTypes) {

    const HandleEvent = () => {

    }

    return (
        <S.ScheduleItemWrapper onClick={HandleEvent}>
            <S.lineWrapper />
            <S.dataWrapper>
                <S.dateWrapper>
                    {startDate}
                    <I.Calender />
                    <S.termWrapper>{ }</S.termWrapper>
                </S.dateWrapper>
                <S.titleWrapper>{title}</S.titleWrapper>
            </S.dataWrapper>
        </S.ScheduleItemWrapper>
    )
}