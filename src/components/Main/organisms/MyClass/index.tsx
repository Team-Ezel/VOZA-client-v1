import { useEffect, useState } from 'react'
import MyClassList from '../../molecules/MyClassList'
import * as S from './style'

// {
//   id: 1,
//   title: '그룹이름',
//   leader: '리더이름',
//   member: 5,
//   thumbnail: '',
// },

function MyClass() {
  return (
    <S.MyClassWrapper>
      <MyClassList />
    </S.MyClassWrapper>
  )
}

export default MyClass
