import { Arrow_down, Arrow_up, Default_profile } from '@/assets/svgs'
import * as S from './style'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { accessToken } from '@/lib/token'
import useFetch from '@/hooks/useFetch'

interface ProfileProps {
  clicked: boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile: React.FC<ProfileProps> = ({ clicked, setClicked }) => {
  const baseurl: string | undefined = process.env.NEXT_PUBLIC_BASEURL

  const { isLoading, fetch, data } = useFetch<{ profileUrl: string }>({
    url: `${baseurl}/user/profile`,
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [])

  return (
    <S.ProfileWrapper>
      {isLoading ? (
        <Default_profile width={40} height={40} />
      ) : (
        <S.MemeberProfileImg ProfileImgURL={data?.profileUrl || ''} />
      )}
      <div onClick={() => setClicked(!clicked)}>
        {clicked ? <Arrow_up /> : <Arrow_down />}
      </div>
    </S.ProfileWrapper>
  )
}

export default Profile
