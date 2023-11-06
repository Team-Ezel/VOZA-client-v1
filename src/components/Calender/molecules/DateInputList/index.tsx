import * as S from "./style"
import * as I from "@/assets/svgs"
import { useState, useEffect } from "react"
import DateInput from "../../atoms/DateInput";
import { DateInputListPropsType } from "@/types/components/Calender/ScheduleTypes";
export default function DateInputList({ startDate, setStartDate, endDate, setEndDate }: DateInputListPropsType) {
    const [startDateValue, setStartDateValue] = useState<string>("");
    const [startTimeValue, setStartTimeValue] = useState<string>("");
    const [endDateValue, setEndDateValue] = useState<string>("");
    const [endTimeValue, setEndTimeValue] = useState<string>("");



    useEffect(() => {
        let Date = startDateValue + "'T'" + startTimeValue.replace(":", "-");
        setStartDate(Date)
        console.log("startDate", Date)
    }, [startDateValue, startTimeValue]);

    useEffect(() => {
        let Date = endDateValue + "'T'" + endTimeValue.replace(":", "-");
        setEndDate(Date)
        console.log("endDate", Date)
    }, [endDateValue, endTimeValue]);

    return (
        <S.DetaInputListWrapper>
            <S.DetaInputWrapper>
                <DateInput
                    type="Date"
                    width="150px"
                    height="50px"
                    fontSize="16px"
                    fontWeight=""
                    color="#9EA1AE"
                    backgroundColor="#F7F7F8"
                    placeHolder="yyyy-mm-dd"
                    border=""
                    borderRadius="5px"
                    value={startDateValue}
                    setValue={setStartDateValue}
                />
                <DateInput
                    type="Time"
                    width="100px"
                    height="50px"
                    fontSize="16px"
                    fontWeight=""
                    color="#9EA1AE"
                    backgroundColor="#F7F7F8"
                    placeHolder="00:00"
                    border=""
                    borderRadius="5px"
                    value={startTimeValue}
                    setValue={setStartTimeValue}
                />
                <I.Wave />
            </S.DetaInputWrapper>
            <S.DetaInputWrapper>
                <DateInput
                    type="Date"
                    width="150px"
                    height="50px"
                    fontSize="16px"
                    fontWeight=""
                    color="#9EA1AE"
                    backgroundColor="#F7F7F8"
                    placeHolder="yyyy-mm-dd"
                    border=""
                    borderRadius="5px"
                    value={endDateValue}
                    setValue={setEndDateValue}
                />
                <DateInput
                    type="Time"
                    width="100px"
                    height="50px"
                    fontSize="16px"
                    fontWeight=""
                    color="#9EA1AE"
                    backgroundColor="#F7F7F8"
                    placeHolder="00:00"
                    border=""
                    borderRadius="5px"
                    value={endTimeValue}
                    setValue={setEndTimeValue}
                />
            </S.DetaInputWrapper>
        </S.DetaInputListWrapper>
    )
}