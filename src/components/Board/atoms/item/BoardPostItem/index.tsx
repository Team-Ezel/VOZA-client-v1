import { BoardPostType } from '@/types/components/board/BoardPostType'
import * as S from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BoardPostItem = (props: BoardPostType) => {
  const createdDate = props.createdDate.toString()
  const params = useRouter().query.id

  return (
    <S.BoardPostItem>
      <div>
        <Link href={`/board/${params}/post/${props.id}`} className='post-title'>
          {props.title}
        </Link>
        {props.boardType ? <S.boardType>{props.boardType}</S.boardType> : null}
      </div>
      <S.postInfo>
        <div className='author'>{props.author}</div>
        <div className='createdDate'>{createdDate}</div>
      </S.postInfo>
    </S.BoardPostItem>
  )
}

export default BoardPostItem
