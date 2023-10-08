import Header from "@/components/Common/organisms/Header";
import { layoutPropType } from "@/types/layout/layoutType";

export default function layout({ children }:layoutPropType){


    return(
        <>
        <Header/>
        { children }
        //footer
        </>
    )
}