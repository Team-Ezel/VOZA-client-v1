import { atom } from "recoil";
import { NewClassModalStateType } from "@/types/components/common/NewClassModal"

export const newClassModal = atom<NewClassModalStateType>({
    key:"NewClassModal",
    default:{
        modal:false,
        page:"category",
        category:[],
        name:"",
        profile:null
    }
})

export const otherClassFilter = atom({
   key:"otherClassFilter",
   default:"all"
})
