import { useEffect } from 'react'
import * as S from './style'
import { BoardPostType } from '@/types/components/board/BoardPostType'
import BoardPostItem from '../../atoms/BoardPostItem'
import NoVoteSvg from '@/assets/svgs/NoVoteSvg'
import NoPostSvg from '@/assets/svgs/NoPostSvg'

interface propsInterface {
  props: any
  listType: string
}

const PostList = ({ props, listType }: propsInterface) => {
  const postlists = props.postlists

  return (
    <S.PostList>
      <S.ListType>{listType}</S.ListType>
      {postlists.length > 0 ? (
        postlists.map((data: BoardPostType, index: number) => {
          return <BoardPostItem key={index} {...data}></BoardPostItem>
        })
      ) : listType === '게시글' ? (
        <S.NoPostFlex>
          <NoPostSvg />
          <S.NoPostTitle>게시글이 존재하지 않아요..</S.NoPostTitle>
          <S.NoPostContent>
            첫번째로 게시글을 써보는건 어떤가요?
          </S.NoPostContent>
        </S.NoPostFlex>
      ) : (
        <S.NoPostFlex>
          <NoVoteSvg />
          <S.NoPostTitle>게시글이 존재하지 않아요..</S.NoPostTitle>
          <S.NoPostContent>
            첫번째로 게시글을 써보는건 어떤가요?
          </S.NoPostContent>
        </S.NoPostFlex>
      )}
    </S.PostList>
  )
}

export default PostList
