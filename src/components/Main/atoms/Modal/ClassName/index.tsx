import Button from '@/components/Common/atoms/Button/Button'
import { useRecoilState } from 'recoil'
import { newClassModal } from '@/atoms/atoms'
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
import { useState } from 'react'
import * as S from './style'

function ClassName() {
  const [name, setName] = useState<string>('')
  const [validation, setValidation] = useState<boolean>(false)
  const [NewClassModalState, setNewClassModalState] =
    useRecoilState<NewClassModalStateType>(newClassModal)
  const inputValue = name.length>0
  return (
    <S.ClassNameWrapper>
      <S.ClassNameInputBox
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='모임 이름을 입력해주세요'
      />
      <S.NoticeWrapper toDisplay={validation ? 'block' : 'none'}>
        공백 사용이 불가능해요!
      </S.NoticeWrapper>
      <Button
        children='다음'
        width='100%'
        height='3rem'
        borderRadius='5px'
        border='0'
        background={inputValue ? '#3355CD' : '#F2F2F4'}
        color='#fff'
        fontSize='18px'
        onClick={() => {
          if (inputValue) {
            setNewClassModalState({ ...NewClassModalState, name:`${name}` })
            setNewClassModalState({ ...NewClassModalState, page: 'profile' })
          }
        }}
      />
    </S.ClassNameWrapper>
  )
}

export default ClassName