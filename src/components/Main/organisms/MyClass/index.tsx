import { useEffect, useState } from 'react'
import MyClassList from '../../molecules/MyClassList'
import * as S from './style'
import NewClassModal from '@/components/Main/organisms/NewClassModal'

function MyClass() {
  return (
    <S.MyClassWrapper>
      <NewClassModal />
      <MyClassList />
    </S.MyClassWrapper>
  )
}

export default MyClass
