import SearchTab from '../../atoms/SearchTab'
import SearchMolecules from '../../molecules/SearchMolecules'
import * as S from './style'

const SearchOrganisms = () => {
  return (
    <S.SearchOrganisms>
      <SearchTab />
      <SearchMolecules />
    </S.SearchOrganisms>
  )
}

export default SearchOrganisms
