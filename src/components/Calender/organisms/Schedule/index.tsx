import { useEffect, useState } from "react"
import CalenderChange from "../../molecules/CalenderChange"
import ScheduleList from "../../molecules/ScheduleList"
import * as S from "./style"

export default function Schedule() {
    const [day, setDay] = useState(Date())
    useEffect(() => {


    }, [])

    return (
        <S.ScheduleWrapper>
            <CalenderChange month="a" onClick={() => { }} type="일" />
            <S.Line />
            <ScheduleList />
        </S.ScheduleWrapper>
    )
}