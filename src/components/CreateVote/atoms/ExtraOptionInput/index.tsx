import React, { useState } from 'react'
import * as S from './style'
import { Cross } from '@/assets/svgs'

type ExtraOptionInputProps = {
  PlaceholderText: string
  onRemove: () => void
  onChange: () => void
}
const ExtraOptionInput = ({
  PlaceholderText,
  onRemove,
}: ExtraOptionInputProps) => {
  return (
    <S.ExtraOptionInputContainer>
      <S.ExtraOptionInput placeholder={PlaceholderText} />
      <S.CrossWrapper onClick={onRemove}>
        <Cross />
      </S.CrossWrapper>
    </S.ExtraOptionInputContainer>
  )
}

export default ExtraOptionInput
