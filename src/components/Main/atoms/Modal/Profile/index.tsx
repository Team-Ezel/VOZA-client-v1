import Button from '@/components/Common/atoms/Button/Button';
import { useRecoilState } from 'recoil';
import { newClassModal, newClassState } from '@/atoms/atoms';
import { NewClassModalStateType } from '@/types/components/common/NewClassModal';
import * as S from './style';
import * as I from '@/assets/svgs';
import { useRef, useState } from 'react';
import useFetchFormdata from '@/hooks/useFetchFormdata';

function Profile() {
  const [NewClassModalState, setNewClassModalState] =
    useRecoilState<NewClassModalStateType>(newClassModal);
  const [newclassState, setNewclassState] = useRecoilState(newClassState);
  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>(""); // 초기 상태는 빈 문자열 또는 ArrayBuffer로 설정
  const imgRef = useRef<HTMLInputElement | null>(null); // useRef에 타입 추가

  const { isLoading, fetch } = useFetchFormdata({
    url: "/group",
    method: "post"
  })

  const handleUpload = () => {
    if (imgRef.current && imgRef.current.files && imgRef.current.files[0]) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    }
  }

  const handleClick = () => {
    let formData = new FormData();
    formData.append('data', JSON.stringify({ ...newclassState }));
    formData.append('file', { imgFile })
    for (let key of formData.keys()) {
      console.log(key);
    }

    /* value 확인하기 */
    for (let value of formData.values()) {
      console.log(value);
    }
    fetch(formData)

    setNewClassModalState({
      ...NewClassModalState,
      page: 'category',
      modal: false,
    });


  }

  return (
    <S.ClassProfileWrapper>
      <S.ProfileWrapper>
        <S.Profile>
          <img src={imgFile || ''} alt='' />
        </S.Profile>
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
  );
}

export default Profile;
