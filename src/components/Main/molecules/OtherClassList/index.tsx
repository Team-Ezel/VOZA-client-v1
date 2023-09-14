import * as S from "./style";
import { useState } from "react"
import { OtherClassListPropsTypes } from "@/types/components/common/OtherClassTypes"
import OtherClassItem from "../../atoms/OtherClassItem";
function OtherClassList({ otherClassList }:OtherClassListPropsTypes ){
    const [datas,setDatas] = useState(otherClassList)
    return(
        <S.OtherClassListWrapper>
            {
                datas.map((item)=>(
                    <OtherClassItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    introduction={item.introduction}
                    tags={item.tags}
                    />
                ))
            }
        </S.OtherClassListWrapper>
    )
}

export default OtherClassList;