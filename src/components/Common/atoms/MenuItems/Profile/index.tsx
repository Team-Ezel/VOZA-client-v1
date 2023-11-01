import { Arrow_down, Arrow_up, Default_profile } from '@/assets/svgs'
import * as S from './style'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { accessToken } from '@/lib/token'

interface ProfileProps {
  clicked: boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile: React.FC<ProfileProps> = ({ clicked, setClicked }) => {
  const baseurl: string | undefined = process.env.NEXT_PUBLIC_BASEURL
  const [profileUrl, setProfileUrl] = useState<string>('')

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!accessToken) {
        console.error('Access Token이 없습니다.')
        return
      }

      const response = await axios.get(`${baseurl}/user/profile`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setProfileUrl(response.data.profileUrl)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [accessToken])

  return (
    <S.ProfileWrapper>
      <S.MemeberProfileImg ProfileImgURL={profileUrl} />
      <div onClick={() => setClicked(!clicked)}>
        {clicked ? <Arrow_up /> : <Arrow_down />}
      </div>
    </S.ProfileWrapper>
  )
}

export default Profile
