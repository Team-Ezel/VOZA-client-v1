import * as S from "./style"


export default function ModalViewer({ component, visible, onClose  }){

    return(
        <S.ModalViewWrapper>
            <S.ModalBackground onClick={onClose} />
            <S.ModalWrapper>{component}</S.ModalWrapper>
        </S.ModalViewWrapper>
    )
}