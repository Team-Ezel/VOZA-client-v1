import { nameInputPropsType } from "@/types/components/Write/ContentsType"
import * as S from "./style"
export default function NameInput ({ name,setName }:nameInputPropsType){
    
    return(
        <S.NameInput value={name} onChange={(e)=>setName(e.target.value)} placeholder="제목을 입력해주세요." />
    )
}