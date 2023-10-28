import { useRecoilState } from "recoil"
import * as S from "./style"
import * as I from "@/assets/svgs"
import { calenderModal } from "@/atoms/atoms"
export default function AddScheduleItem() {
    const [scheduleModal, setScheduleModal] = useRecoilState(calenderModal)
    return (
        <S.AddSheduleItemWrapper onClick={() => { setScheduleModal(true) }}>
            일정 추가하기
            <I.Add />
        </S.AddSheduleItemWrapper>
    )
}