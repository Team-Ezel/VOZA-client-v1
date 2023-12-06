import React, { useState } from 'react'
import * as S from './style'
import axios from 'axios'
import Input from '../../atoms/Input'
import ExtraOptionInput from '../../atoms/ExtraOptionInput'
import Button from '@/components/Common/atoms/Button/Button'
import { useRouter } from 'next/router'

const VoteForm = () => {
  const baseurl: string | undefined = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const { id } = router.query
  const [extraOptions, setExtraOptions] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [options, setOptions] = useState(['', ''])

  const addExtraOption = () => {
    setExtraOptions([...extraOptions, ''])
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleOptionChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newOptions = [...options]
      newOptions[index] = e.target.value
      setOptions(newOptions)
    }

  const removeExtraOption = (index: number) => {
    const updatedOptions = extraOptions.filter((_, i) => i !== index)
    setExtraOptions(updatedOptions)
  }

  const handleExtraOptionChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newExtraOptions = [...extraOptions]
      newExtraOptions[index] = e.target.value
      setExtraOptions(newExtraOptions)
    }

  const handleSubmit = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!accessToken) {
        console.error('Access Token이 없습니다.')
        return
      }

      await axios({
        method: 'post',
        url: `${baseurl}/group/${id}/vote`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          title,
          options: [...options, ...extraOptions],
        },
      })

      router.replace(`/group/${router.query.id}`);
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <S.VoteFromContainer>
      <S.Title>투표글 작성</S.Title>
      <S.SubTitle>새로운 투표글을 올려보세요!</S.SubTitle>
      <S.TitleContainer>
        <S.TitleInput> 제목 </S.TitleInput>
        <Input
          PlaceholderText='제목을 입력하세요'
          onChange={handleTitleChange}
        />
      </S.TitleContainer>
      <S.OptionContainer>
        <S.OptionTitle>옵션</S.OptionTitle>
        <S.OptionInputContainer>
          <Input
            PlaceholderText='옵션을 입력하세요'
            onChange={handleOptionChange(0)}
          />
          <Input
            PlaceholderText='옵션을 입력하세요'
            onChange={handleOptionChange(1)}
          />
          {extraOptions.map((extraOption, index) => (
            <ExtraOptionInput
              key={index}
              PlaceholderText='옵션을 입력하세요'
              onRemove={() => removeExtraOption(index)}
              onChange={(e) => handleExtraOptionChange(index)}
            />
          ))}
          {extraOptions.length < 2 && (
            <Button
              width='22.75rem'
              height='2.35rem'
              background='#fff'
              border='none'
              hoverBackground='#f9f9f9'
              color='#656B80'
              borderRadius='0.3125rem'
              onClick={addExtraOption}
            >
              + 옵션추가
            </Button>
          )}
        </S.OptionInputContainer>
      </S.OptionContainer>

      <S.SubmitButtonWrapper>
        <Button
          width='100%'
          height='2.85rem'
          border='none'
          background='#3355CD'
          color='white'
          borderRadius='0.3125rem'
          onClick={handleSubmit}
        >
          등록하기
        </Button>
      </S.SubmitButtonWrapper>
    </S.VoteFromContainer>
  )
}

export default VoteForm
