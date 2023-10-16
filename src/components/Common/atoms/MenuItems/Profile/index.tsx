import { Arrow_down, Arrow_up, Default_profile } from '@/assets/svgs'
import * as S from './style'
import React, { useState } from 'react'

interface ProfileProps {
  clicked: boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile : React.FC<ProfileProps> = ({ clicked, setClicked }) => {

  return (
    <S.ProfileWrapper>
      <Default_profile width={38} height={38} />
      <div onClick={() => setClicked(!clicked)}>
        {clicked ? <Arrow_up /> : <Arrow_down />}
      </div>
    </S.ProfileWrapper >
  )
}

export default Profile
