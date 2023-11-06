import { atom } from 'recoil'
import {
  NewClassModalStateType,
  NewClassModalState,
} from '@/types/components/common/NewClassModal'

export const newClassModal = atom<NewClassModalStateType>({
  key: 'NewClassModal',
  default: {
    modal: false,

    page: 'category',
  },
})

export const newClassState = atom<NewClassModalState>({
  key: 'newClassState',
  default: {
    groupName: '',
    introduceGroup: '',
    region: '',
    tags: [],
  },
})

export const otherClassFilter = atom({
  key: 'otherClassFilter',
  default: 'all',
})
export const calenderModal = atom({
  key: 'calenderModal',
  default: false,
})
