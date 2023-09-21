import { useRecoilState } from "recoil";
import { newClassModal } from "@/atoms/atoms"
import * as S from './style'
import * as I from '@/assets/svgs'

function NewClassItem() {
  const [NewClassModalState,setNewClassModalState] = useRecoilState(newClassModal);

  return (
    <S.NewClassWrapper onClick={()=>setNewClassModalState({...NewClassModalState,modal:true})}>
      <S.InformationWrapper>
        <I.Add_circle />
        <p>만들기</p>
      </S.InformationWrapper>
    </S.NewClassWrapper>
  )
}
export default NewClassItem
