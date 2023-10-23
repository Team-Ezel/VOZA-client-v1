import Button from '@/components/Common/atoms/Button/Button'
import { useRecoilState } from 'recoil'
import { newClassModal } from '@/atoms/atoms'
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
import * as S from './style'
import * as I from '@/assets/svgs'
import { useRef } from 'react'
function Profile() {
  const [NewClassModalState, setNewClassModalState] =
    useRecoilState<NewClassModalStateType>(newClassModal)
  const fileRef = useRef(null)
  const handleUpload = () => { }

  return (
    <S.ClassProfileWrapper>
      <S.ProfileWrapper>
        <S.Profile />
        <S.ProfileButtonWrapper>
          <S.AddProfileButton htmlFor='file'>
            <I.Camera />
            <p>사진추가</p>
          </S.AddProfileButton>
          <input
            accept='file/*'
            multiple
            type='file'
            id='file'
            ref={fileRef}
            onChange={handleUpload}
          />
        </S.ProfileButtonWrapper>
      </S.ProfileWrapper>
      <Button
        width='100%'
        height='3rem'
        borderRadius='5px'
        border='0'
        background='#3355CD'
        color='#fff'
        fontSize='18px'
        onClick={() => {
          setNewClassModalState({
            ...NewClassModalState,
            profile: '',
            page: 'category',
            modal: false,
          })
        }}
      >다음</Button>
    </S.ClassProfileWrapper>
  )
}
export default Profile
