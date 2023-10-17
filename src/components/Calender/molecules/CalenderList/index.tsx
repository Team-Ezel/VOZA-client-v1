import { CalenderListPropsTypes } from "@/types/components/Calender/CalenderType"
import CalenderItem from "../../atoms/CalenderItem"
import * as S from "./style"

export default function CalenderList({ data, date, onClick }: CalenderListPropsTypes) {
    console.log(data)
    return (
        <S.CalenderListWrapper>
            {
                data.map((i, idx) => (
                    <CalenderItem
                        data={i}
                        onClick={() => { }}
                        key={idx}
                        date={date}
                    />
                ))
            }
        </S.CalenderListWrapper>
    )
}