import { useEffect, useState } from "react"
import CalenderChange from "../../molecules/CalenderChange"
import ScheduleList from "../../molecules/ScheduleList"
import moment, { Moment as MomentTypes } from 'moment'
import * as S from "./style"

export default function Schedule() {
    const [day, setDay] = useState<MomentTypes>(() => moment());
    const jumpToDay = (num: number) => (num ? setDay(day.clone().add(1, 'day')) : setDay(day.clone().subtract(1, 'day')));

    useEffect(() => {


    }, [])

    return (
        <S.ScheduleWrapper>
            <CalenderChange month={day._d.getDate()} onClick={jumpToDay} type="일" />
            <S.Line />
            <ScheduleList />
        </S.ScheduleWrapper>
    )
}