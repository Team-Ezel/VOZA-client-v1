import React from 'react'
import * as S from './style'
import MemberListItem from '../../atoms/Items/MemberListItem'

const MemberList = () => {
  return (
    <S.MemberListContainer>
      <S.Title>멤버</S.Title>
      <MemberListItem name='김철중' />
      <MemberListItem name='이태훈' />
    </S.MemberListContainer>
  )
}

export default MemberList
