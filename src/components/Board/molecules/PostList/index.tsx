import { useEffect } from 'react'
import * as S from './style'
import { BoardPostType } from '@/types/components/board/BoardPostType'
import BoardPostItem from '../../atoms/BoardPostItem'

interface propsInterface {
  props: any
  listType: string
}

const PostList = ({ props, listType }: propsInterface) => {
  useEffect(() => {
    if (props) {
      console.log(props.postlists)
    }
  }, [props])

  return (
    <S.PostList>
      <S.listType>{listType}</S.listType>
      {props.postlists.map((data: BoardPostType, index: number) => {
        return <BoardPostItem key={index} {...data}></BoardPostItem>
      })}
    </S.PostList>
  )
}

export default PostList
