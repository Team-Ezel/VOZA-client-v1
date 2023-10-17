import { ScheduleListDummy } from "@/assets/data/ScheduleListDummy"
import AddScheduleItem from "../../atoms/AddScheduleItem"
import ScheduleItem from "../../atoms/ScheduleItem"
import * as S from "./style"

export default function ScheduleList({ }) {

    return (
        <S.ScheduleListWrapper>
            <AddScheduleItem />
            {
                ScheduleListDummy.map((i) => (
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
