import React from 'react'
import * as S from './style'
import Link from 'next/link'
import TokenManager from '@/apis/TokenManager'
import { useRouter } from 'next/router'

interface MenuModalPropsType {
  joinCode: boolean
  setJoinCode: React.Dispatch<React.SetStateAction<boolean>>
  setMenuClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuModal = ({
  joinCode,
  setJoinCode,
  setMenuClicked,
}: MenuModalPropsType) => {
  const joinGroup = () => {
    setJoinCode(joinCode ? false : true)
    setMenuClicked(false)
  }

  const router = useRouter()
  const logout = () => {
    const tokenManager = new TokenManager()
    tokenManager.removeTokens()
    router.replace('')
  }

  return (
    <S.MenuModalWrapper>
      <p onClick={joinGroup}>그룹가입</p>
      <div onClick={logout}>
        <p>로그아웃</p>
      </div>
    </S.MenuModalWrapper>
  )
}

export default MenuModal
