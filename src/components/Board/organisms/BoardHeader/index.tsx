import * as S from './style'
import { BoardHeaderListData } from '@/assets/data/BoardHeaderListData'
import BoardHeaderItem from '../../molecules/boardHeaderItem'

const BoardHeader = () => {
  return (
    <S.BoardHeader>
      <header>
        {BoardHeaderListData.map((data) => (
          <BoardHeaderItem
            name={data.name}
            value={data.value}
            key={data.value}
          />
        ))}
      </header>
    </S.BoardHeader>
  )
}

export default BoardHeader
