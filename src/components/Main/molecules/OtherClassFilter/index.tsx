import OtherClassFilterItem from "../../atoms/OtherClassFilterItem";
import * as S from "./style"
import { OtherClassFilterListData } from "@/assets/data/OtherClassFilterListData";
function OtherClassFilter (){
    return(
        <S.OtherClassFilterWrapper>
            {
                OtherClassFilterListData.map((item)=>(
                    <OtherClassFilterItem
                    name={item.name}
                    value={item.value}
                    key={item.name}
                    />
                ))
            }
        </S.OtherClassFilterWrapper>
    )
}
export default OtherClassFilter;