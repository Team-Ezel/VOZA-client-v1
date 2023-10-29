import { useRecoilState } from "recoil"
import { calenderModal } from '@/atoms/atoms'
import * as S from "./style"
import TitleBox from "@/components/Common/atoms/TitleBox"
import ScheduleOptionItem from "../../atoms/ScheduleOptionItem"
import Button from "@/components/Common/atoms/Button/Button"
import DateInputList from "../../molecules/DateInputList"
import { useState } from "react"

export default function CalenderModal() {
    const [ModalState, setModalState] = useRecoilState(calenderModal)
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const Upload = () => {
        setModalState(false)

    }
    return (
        <>
            {
                ModalState ? <S.CalenderModal>
                    <S.CalenderModalWrapper>
                        <S.ContentWrapper>
                            <TitleBox title="일정 추가" subTitle="새로운 일정을 추가해보세요" />
                            <S.OptionListWrapper>
                                <ScheduleOptionItem title="제목">
                                    <S.InputWrapper placeholder="제목을 입력해주세요." value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                </ScheduleOptionItem>
                                <ScheduleOptionItem title="기간" >
                                    <DateInputList
                                        startDate={startDate}
                                        setStartDate={setStartDate}
                                        endDate={endDate}
                                        setEndDate={setEndDate}
                                    />
                                </ScheduleOptionItem>
                                <ScheduleOptionItem title="내용">
                                    <S.ContentInputWrapper placeholder="내용을 입력해주세요." value={content} onChange={(e) => { setContent(e.target.value) }} />
                                </ScheduleOptionItem>
                            </S.OptionListWrapper>
                        </S.ContentWrapper>
                        <Button
                            border="none"
                            fontSize="20px"
                            color="#fff"
                            background="#2B65D9"
                            borderRadius="5px"
                            height="50px"
                            width="auto"
                            onClick={Upload}
                        >추가하기</Button>
                    </S.CalenderModalWrapper>
                </S.CalenderModal> : null
            }
        </>
    )
}