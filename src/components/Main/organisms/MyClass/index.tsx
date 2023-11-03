import { useEffect, useState } from 'react'
import MyClassList from '../../molecules/MyClassList'
import * as S from './style'

function MyClass() {
  return (
    <S.MyClassWrapper>
      <MyClassList />
    </S.MyClassWrapper>
  )
}

export default MyClass
