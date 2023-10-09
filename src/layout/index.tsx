import Header from "@/components/Common/organisms/Header";
import Modal from "@/components/Common/organisms/Modal";
import { layoutPropType } from "@/types/layout/layoutType";

export default function layout({ children }:layoutPropType){


    return(
        <>
        <Header/>
        { children }
        //footer
        <Modal/>
        </>
    )
}