import React, { useState } from 'react'
import * as S from './style'
import { Settings } from '@/assets/svgs'
import MemberOptionModal from '../../Modal/MemberOptionModal'
import ProfileModal from '../../Modal/ProfileModal'

type MemberListItemProps = {
  name: string
  memberId: number
  profileURL: string
}

const MemberListItem = ({
  name,
  memberId,
  profileURL,
}: MemberListItemProps) => {
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
        <S.MemeberProfileImg ProfileImgURL={ profileURL || ''} />{' '}
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
