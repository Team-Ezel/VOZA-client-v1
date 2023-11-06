import React from 'react'
import * as S from './style'

type InputProps = {
  PlaceholderText: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ PlaceholderText, onChange }: InputProps) => {
  return <S.Input placeholder={PlaceholderText} onChange={onChange} />
}

export default Input
