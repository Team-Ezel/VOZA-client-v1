import { atom } from "recoil";

export const NewClassModal = atom({
    key:"NewClassModal",
    default:false
})

export const otherClassFilter = atom({
   key:"otherClassFilter",
   default:"all"
})