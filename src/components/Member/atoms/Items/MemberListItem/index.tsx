import React, { useState } from 'react'
import * as S from './style'
import { Settings } from '@/assets/svgs'
import MemberOptionModal from '../../Modal/MemberOptionModal'
import ProfileModal from '../../Modal/ProfileModal'

type MemberListItemProps = {
  name: string
  memberId: number
  profileURL: string
  isLeader: Boolean
}

const MemberListItem = ({
  name,
  memberId,
  profileURL,
  isLeader,
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
        <S.MemeberProfileImg ProfileImgURL={profileURL || ''} />{' '}
        <S.MemberName>{name}</S.MemberName>
      </S.MemberProfile>
      <S.MemberSetting>
        <div onClick={toggleModal}>{isLeader ? <Settings /> : null}</div>
        {isModalVisible && <MemberOptionModal memberId={memberId} />}
      </S.MemberSetting>
      {isProfileModalVisible && (
        <ProfileModal
          onClose={toggleProfileModal}
          memberId={memberId}
          nickname={name}
          profileUrl={profileURL}
        />
      )}
    </S.MemberItemContainer>
  )
}

export default MemberListItem
