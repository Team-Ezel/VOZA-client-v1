import { atom } from 'recoil'
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
import { EditPostType } from '@/types/components/post/EditPostType'

export const newClassModal = atom<NewClassModalStateType>({
  key: 'NewClassModal',
  default: {
    modal: false,
    page: 'category',
    category: [],
    name: '',
    profile: null,
  },
})

export const otherClassFilter = atom({
  key: 'otherClassFilter',
  default: 'all',
})

export const boardModalAtom = atom({
  key: 'boardModalAtom',
  default: false,
})

export const calenderModal = atom({
  key: 'calenderModal',
  default: false,
})

export const editStateAtom = atom({
  key: 'editStateAtom',
  default: false,
})

export const editItemAtom = atom<EditPostType>({
  key: 'editItemAtom',
  default: {
    title: '',
    content: '',
  },
})
