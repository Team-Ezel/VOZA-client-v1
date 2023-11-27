import { PostType } from '@/types/components/post/PostType'
import * as S from './style'
import { useRecoilState, useRecoilValue } from 'recoil'
import { editItemAtom, editStateAtom } from '@/atoms/atoms'
import { useState, useEffect } from 'react'

const PostInfo = (props: PostType) => {
  const [editContent, setEditContent] = useRecoilState(editItemAtom)
  const editState = useRecoilValue<boolean>(editStateAtom)

  useEffect(() => {
    setEditContent({ title: props.title, content: props.content })
    console.log(props)
  }, [])

  const onChange = (event: any) => {
    setEditContent({ title: event.target.value, content: editContent.content })
  }

  return (
    <S.PostInfo>
      {editState === true ? (
        <S.EditArea onChange={onChange} value={editContent.title}>
          {props.title}
        </S.EditArea>
      ) : (
        <S.PostTitle>{props.title}</S.PostTitle>
      )}
      <S.PostInfoOrganism>
        <S.PostInfoContent>{props.author}</S.PostInfoContent>
        <S.PostInfoContent>
          작성일 : {props.createdDate.substring(0, 10)}
        </S.PostInfoContent>
      </S.PostInfoOrganism>
    </S.PostInfo>
  )
}

export default PostInfo
