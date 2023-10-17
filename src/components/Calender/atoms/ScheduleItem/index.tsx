import { ScheduleItemPropsTypes } from "@/types/components/Calender/ScheduleTypes"
import * as S from "./style"

export default function ScheduleItem({ id, title, startDate, endDate }: ScheduleItemPropsTypes) {

    const HandleEvent = () => {

    }

    return (
        <S.ScheduleItemWrapper onClick={HandleEvent}>
            <S.lineWrapper />
            <S.dataWrapper>
                <S.dateWrapper></S.dateWrapper>
                <S.titleWrapper></S.titleWrapper>
            </S.dataWrapper>
        </S.ScheduleItemWrapper>
    )
}