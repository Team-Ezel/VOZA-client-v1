import Button from '@/components/Common/atoms/Button/Button'
import { useRecoilState } from 'recoil'
import { newClassModal } from '@/atoms/atoms'
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
import * as S from './style'
import * as I from '@/assets/svgs'
import { useRef, useState, ChangeEvent } from 'react'
import useFetchFormdata from '@/hooks/useFetchFormdata'
import { blob } from 'stream/consumers'

function Profile() {
  const [NewClassModalState, setNewClassModalState] =
    useRecoilState<NewClassModalStateType>(newClassModal)
  const [file, setFile] = useState<File | undefined>(undefined)
  const imgRef = useRef<HTMLInputElement | null>(null) // useRef에 타입 추가

  const { isLoading, fetch } = useFetchFormdata({
    url: '/group',
    method: 'post',
  })

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.item(0)
    if (selectedFile !== null) setFile(selectedFile)
  }

  const handleClick = () => {
    const formData = new FormData()
    if (file) {
      const imageFile = new File([file], 'noticeImage.png', {
        type: 'image/png',
      })
      formData.append('file', imageFile)
    } else {
      return
    }
    formData.append(
      'data',
      new Blob(
        [
          JSON.stringify({
            groupName: NewClassModalState.name,
            introduceGroup: 'This is a test group1',
            region: 'Test Region',
            tags: NewClassModalState.category,
          }),
        ],
        { type: 'application/json' },
      ),
    )
    console.log(NewClassModalState)
    fetch(formData)

    setNewClassModalState({
      ...NewClassModalState,
      page: 'category',
      modal: false,
    })
  }

  return (
    <S.ClassProfileWrapper>
      <S.ProfileWrapper>
        <S.Profile>
          {file ? <img src={URL.createObjectURL(file)} alt='' /> : null}
        </S.Profile>
        <S.ProfileButtonWrapper>
          <S.AddProfileButton htmlFor='file'>
            <I.Camera />
            <p>사진추가</p>
          </S.AddProfileButton>
          <input
            accept='image/png, image/jpeg'
            multiple
            type='file'
            id='file'
            ref={imgRef}
            name='profileImg'
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
        onClick={handleClick} // handleUpload 대신 handleClick를 호출
      >
        다음
      </Button>
    </S.ClassProfileWrapper>
  )
}

export default Profile
