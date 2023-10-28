import React, { useState } from 'react'
import * as S from './style'
import { Default_profile, Settings } from '@/assets/svgs'
import MemberOptionModal from '../../Modal/MemberOptionModal'
import ProfileModal from '../../Modal/ProfileModal'

type MemberListItemProps = {
  name: string
  memberId: number
}

const MemberListItem = ({ name, memberId }: MemberListItemProps) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isProfileModalVisible, setProfileModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible)
  }

  return (
    <S.MemberItemContainer>
      <S.MemberProfile onClick={toggleProfileModal}>
        {/* <Default_profile width={38} height={38} /> */}
        <S.MemeberProfileImg /> { /* 백엔드 수정이후 백그라운드 만들어야함 */ }
        <S.MemberName>{name}</S.MemberName>
      </S.MemberProfile>
      <S.MemberSetting>
        <div onClick={toggleModal}>
          <Settings />
        </div>
        {isModalVisible && <MemberOptionModal memberId={memberId} />}
      </S.MemberSetting>
      {isProfileModalVisible && <ProfileModal onClose={toggleProfileModal} />}
    </S.MemberItemContainer>
  )
}

export default MemberListItem
