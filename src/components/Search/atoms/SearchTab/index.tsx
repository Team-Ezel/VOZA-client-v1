import { Search } from '@/assets/svgs'
import * as S from './style'

const SearchTab = () => {
  return (
    <S.SearchTab>
      <S.SearchTabWrapper>
        <input />
        <div>
          <Search />
        </div>
      </S.SearchTabWrapper>
    </S.SearchTab>
  )
}

export default SearchTab
