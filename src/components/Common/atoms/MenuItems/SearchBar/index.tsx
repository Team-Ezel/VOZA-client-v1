import React from 'react'
import * as S from './style'
import { Search } from '@/assets/svgs'

const SearchBar = () => {
  return (
    <S.SearchBarWrapper>
      <S.SearchInput />
      <div>
        <Search />
      </div>
    </S.SearchBarWrapper>
  )
}

export default SearchBar
