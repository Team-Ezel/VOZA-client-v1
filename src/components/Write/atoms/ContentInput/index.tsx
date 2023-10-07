import { contentsPropsType } from "@/types/components/Write/ContentsType"
import * as S from "./style"
export default function ContentInput({contents,setContents}:contentsPropsType){
    return(
        <S.ContentInput value={contents} onChange={(e)=>setContents(e.target.value)} placeholder="내용을 작성해주세요" />
    )
}