import { ScheduleListDummy } from "@/assets/data/ScheduleListDummy"
import AddScheduleItem from "../../atoms/AddScheduleItem"
import ScheduleItem from "../../atoms/ScheduleItem"
import * as S from "./style"
import { ScheduleListPropsType } from "@/types/components/Calender/ScheduleTypes"

export default function ScheduleList({ day }: ScheduleListPropsType) {
    console.log(day)
    return (
        <S.ScheduleListWrapper>
            <AddScheduleItem />
            {
                ScheduleListDummy.filter((i) => i.startDate <= day && i.endDate >= day).map((i) => (
                    <ScheduleItem
                        id={i.id}
                        title={i.title}
                        startDate={i.startDate}
                        endDate={i.endDate}
                        key={i.id}
                    />
                ))
            }
        </S.ScheduleListWrapper>
    )
}
