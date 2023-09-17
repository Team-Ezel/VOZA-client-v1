import MainPageBarItem from "../../atoms/MainPageBarItem";
import * as S from "./style";
import { MainPageBarListData } from "@/assets/data/MainPageBarListData";
function MainPageBarList(){
    return(
        <S.MainPageBarListWrapper>
            {
                MainPageBarListData.map((item)=>(
                    <MainPageBarItem
                    name={item.name}
                    value={item.value}
                    key={item.value}
                    />
                ))
            }
        </S.MainPageBarListWrapper>
    )
}
export default MainPageBarList;