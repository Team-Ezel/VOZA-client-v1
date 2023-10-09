import { useCallback } from 'react'
import { modalState } from '@/atoms/atoms'
import { useRecoilState } from 'recoil'

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState)

  const openModal = useCallback(
    (modalData: React.ReactNode) => {
      setModal({
        component: modalData,
        visible: true,
      })
    },
    [setModal],
  )

  const closeModal = useCallback(() => {
    setModal({
      component: null,
      visible: false,
    })
  }, [setModal])

  return { openModal, closeModal, visible: modal.visible }
}
