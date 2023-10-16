import * as S from "./style"
import moment from 'moment';
import buildCalendar from "@/utils/buildCalender";

export default function CalenderBox() {
    const date = moment();


    console.log(buildCalendar(date))
    return (
        <S.CalenderBoxWrapper>
            <S.CalenderLine BackgroundColor="#E2E2EE" />
            <S.CalenderLine BackgroundColor="#F2F2F4" />
            <S.CalenderLine BackgroundColor="#F2F2F4" />
            <S.CalenderLine BackgroundColor="#F2F2F4" />
            <S.CalenderLine BackgroundColor="#F2F2F4" />
            <S.CalenderLine BackgroundColor="#F2F2F4" />
        </S.CalenderBoxWrapper>
    )
}
