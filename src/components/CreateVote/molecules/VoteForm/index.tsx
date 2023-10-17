import React, { useState } from 'react'
import * as S from './style'
import Input from '../../atoms/Input'
import ExtraOptionInput from '../../atoms/ExtraOptionInput'
import Button from '@/components/Common/atoms/Button/Button'

const VoteForm = () => {
  const [extraOptions, setExtraOptions] = useState<string[]>([])

  const addExtraOption = () => {
    setExtraOptions([...extraOptions, ''])
  }

  const removeExtraOption = (index: number) => {
    const updatedOptions = extraOptions.filter((_, i) => i !== index)
    setExtraOptions(updatedOptions)
  }

  return (
    <S.VoteFromContainer>
      <S.Title>투표글 작성</S.Title>
      <S.SubTitle>새로운 투표글을 올려보세요!</S.SubTitle>
      <S.TitleContainer>
        <S.TitleInput> 제목 </S.TitleInput>
        <Input PlaceholderText='제목을 입력하세요' />
      </S.TitleContainer>
      <S.OptionContainer>
        <S.OptionTitle>옵션</S.OptionTitle>
        <S.OptionInputContainer>
          <Input PlaceholderText='옵션을 입력하세요' />
          <Input PlaceholderText='옵션을 입력하세요' />
          {extraOptions.map((extraOption, index) => (
            <ExtraOptionInput
              key={index}
              PlaceholderText='옵션을 입력하세요'
              onRemove={() => removeExtraOption(index)}
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
        >
          등록하기
        </Button>
      </S.SubmitButtonWrapper>
    </S.VoteFromContainer>
  )
}

export default VoteForm
