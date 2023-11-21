import BoardPostItem from '@/components/Board/atoms/item/BoardPostItem'
import { BoardPostType } from '@/types/components/board/BoardPostType'
import { useEffect } from 'react'
import * as S from './style'

interface propsInterface {
  DummyPostData: BoardPostType[]
}

const SearchPostlists = (props: propsInterface) => {
  useEffect(() => {
    console.log(props.DummyPostData.length)
  }, [props])
  return (
    <S.SearchPostlist>
      {props.DummyPostData.length > 0 ? (
        props.DummyPostData.map((data: BoardPostType, index: number) => {
          return <BoardPostItem key={index} {...data}></BoardPostItem>
        })
      ) : (
        <div>검색 결과를 찾을수 없어요!</div>
      )}
    </S.SearchPostlist>
  )
}

export default SearchPostlists
