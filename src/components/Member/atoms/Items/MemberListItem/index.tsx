import React, { useState } from 'react'
import * as S from './style'
import { Default_profile, Settings } from '@/assets/svgs'
import MemberOptionModal from '../../Modal/MemberOptionModal'

type MemberListItemProps = {
  name: string
}

const MemberListItem = ({ name }: MemberListItemProps) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <S.MemberItemContainer>
      <S.MemberProfile>
        <Default_profile width={38} height={38}/>
        <S.MemberName>{name}</S.MemberName>
      </S.MemberProfile>
      <S.MemberSetting>
        <div onClick={toggleModal}>
          <Settings />
        </div>
        {isModalVisible && <MemberOptionModal />}
      </S.MemberSetting>
    </S.MemberItemContainer>
  )
}

export default MemberListItem
