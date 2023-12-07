import { BoardPostType } from '@/types/components/board/BoardPostType'
import * as S from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BoardPostItem = (props: BoardPostType) => {
  const params = useRouter().query.id
  const createdDate = props.createdDate.substring(0, 10)

  const postLink = `/group/${params}/post/${props.boardId}`
  const voteLink = `/group/${params}/vote/${props.id}`

  return (
    <S.BoardPostItem>
      <div>
        <Link
          href={props.boardId === undefined ? voteLink : postLink}
          className='post-title'
        >
          {props.title}
        </Link>
        {props.boardType ? (
          <S.boardType>
            {props.boardType === 'NORMAL' ? '일반' : '공지'}
          </S.boardType>
        ) : null}
      </div>
      <S.postInfo>
        <div className='author'>{props.author}</div>
        <div className='createdDate'>{createdDate}</div>
      </S.postInfo>
    </S.BoardPostItem>
  )
}

export default BoardPostItem
