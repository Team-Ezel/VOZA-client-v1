import React from 'react'
import * as S  from './style'
import Link from 'next/link'

const MenuModal = () => {
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
      <S.LogoutTitle>
        <Link href={'/'}>
          <p>로그아웃</p>
        </Link>
      </S.LogoutTitle>
    </S.MenuModalWrapper>
  )
}

export default MenuModal
