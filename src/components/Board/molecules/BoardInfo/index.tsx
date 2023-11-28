import Button from '@/components/Common/atoms/Button/Button'
import * as S from './style'
import { BoardInfoType } from '@/types/components/board/BoardInfoType'
import { useRecoilState } from 'recoil'
import { boardModalAtom } from '@/atoms/atoms'

const BoardInfo = (props: BoardInfoType) => {
  const [modalState, setModalState] = useRecoilState(boardModalAtom)

  const btnOnClick = () => {
    setModalState(!modalState)
  }

  return (
    <S.BoardInfo>
      <img src={props.imageUrl} alt={props.imageUrl} />
      <div className='board-name'>{props.boardName}</div>
      <div className='board-desc'>{props.boardDesc}</div>
      <Button onClick={btnOnClick} {...S.buttonContent} />
    </S.BoardInfo>
  )
}

export default BoardInfo
