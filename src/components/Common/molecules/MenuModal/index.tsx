import React from 'react'
import * as S from './style'
import Link from 'next/link'

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

  return (
    <S.MenuModalWrapper>
      <Link href={'/'}>
        <p>마이페이지</p>
      </Link>
      <Link href={'/'}>
        <p>친구추가</p>
      </Link>
      <Link href={'/'}>
        <p>친구초대</p>
      </Link>
      <p onClick={joinGroup}>그룹가입</p>
      <Link href={'/'}>
        <p>로그아웃</p>
      </Link>
    </S.MenuModalWrapper>
  )
}

export default MenuModal
