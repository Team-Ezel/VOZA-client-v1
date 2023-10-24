import { useRecoilState } from "recoil";
import { newClassModal } from "@/atoms/atoms"
import * as S from "./style";
import { useState } from "react";
import NewClassModalSelect from "../../molecules/NewClassModalSelect";
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
function NewClassModal() {
    const [NewClassModalState, setNewClassModalState] = useRecoilState<NewClassModalStateType>(newClassModal);
    const [subTitle, setSubTitle] = useState("어떤 모임을 만드실 건가요?");

    return (
        NewClassModalState.modal ?
            <S.NewClassModalWrapper>
                <S.ModaloutsideWrapper onClick={() => setNewClassModalState({ ...NewClassModalState, modal: false })} />
                <S.ModalInsideWrapper>
                    <S.TitleWrapper>내 모임 만들기</S.TitleWrapper>
                    <S.SubTitleWrapper>{subTitle}</S.SubTitleWrapper>
                    {NewClassModalSelect()[NewClassModalState.page]()}
                </S.ModalInsideWrapper>
            </S.NewClassModalWrapper>
            : null
    )
}

export default NewClassModal