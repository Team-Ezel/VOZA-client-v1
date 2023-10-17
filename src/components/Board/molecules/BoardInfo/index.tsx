import Button from '@/components/Common/atoms/Button/Button'
import * as S from './style'
import { BoardInfoType } from '@/types/components/board/BoardInfoType'
import Image from 'next/image'

const BoardInfo = (props: BoardInfoType) => {
  return (
    <S.BoardInfo>
      <img src={props.imageUrl} alt={props.boardName} />
      <div className='board-name'>{props.boardName}</div>
      <div className='board-desc'>{props.boardDesc}</div>
      <Button {...S.buttonContent} />
    </S.BoardInfo>
  )
}

export default BoardInfo
