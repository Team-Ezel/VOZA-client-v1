import React, { useState } from 'react'
import * as S from './style'
import { Ben, Timers } from '@/assets/svgs'
import dynamic from 'next/dynamic'

const MemberOptionModal = () => {
  const [isAddAdminModalOpen, setAddAdminModalOpen] = useState(false)
  const [isMemberBenModalOpen, setMemberBenModalOpen] = useState(false)
  const [isMemberSuspensionModalOpen, setMemberSuspensionModalOpen] =
    useState(false)

  const AddAdminModal = dynamic(
    () => import('@/components/Member/atoms/Modal/AddAdminModal'),
    {
      ssr: false,
    },
  )

  const MemberBenModal = dynamic(
    () => import('@/components/Member/atoms/Modal/MemberBenModal'),
    {
      ssr: false,
    },
  )

  const MemberSuspensionModal = dynamic(
    () => import('@/components/Member/atoms/Modal/MemberSuspensionModal'),
    {
      ssr: false,
    },
  )

  return (
    <S.OptionModalWrapper>
      <S.ModalOption onClick={() => setAddAdminModalOpen(true)}>
        관리자 권한 부여
      </S.ModalOption>
      <S.ModalOption onClick={() => setMemberSuspensionModalOpen(true)}>
        멤버 임시 정지
        <S.SVGContainer>
          <Timers />
        </S.SVGContainer>
      </S.ModalOption>
      <S.ModalOption
        onClick={() => setMemberBenModalOpen(true)}
        style={{ color: 'red' }}
      >
        멤버 내보내기
        <S.SVGContainer>
          <Ben />
        </S.SVGContainer>
      </S.ModalOption>

      {isAddAdminModalOpen && <AddAdminModal />}
      {isMemberBenModalOpen && <MemberBenModal />}
      {isMemberSuspensionModalOpen && <MemberSuspensionModal />}
    </S.OptionModalWrapper>
  )
}

export default MemberOptionModal
