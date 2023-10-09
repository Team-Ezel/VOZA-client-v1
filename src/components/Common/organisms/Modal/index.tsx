import { useRecoilState } from "recoil"
import { modalState } from "@/atoms/atoms"
import ModalViewer from "../../molecules/ModalViewer"
import useModal from "@/hooks/useModal"

export default function Modal(){
    const [modal,setModal] = useRecoilState(modalState)
    const { closeModal } = useModal();

    return(
        <ModalViewer
        component={modal.component}
        visible={modal.visible}
        onClose={()=>{
            closeModal();
        }}
        />
    )
}