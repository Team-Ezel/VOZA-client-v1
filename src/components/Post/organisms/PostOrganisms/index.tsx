/* eslint-disable react/no-children-prop */
import PostInfo from '../../molecules/PostInfo'
import * as S from './style'
import { PostType } from '@/types/components/post/PostType'
import { useEffect, useState } from 'react'
import { Button } from '@/components/Common/atoms/Button/Button/style'
import { useRouter } from 'next/router'
import useFetch from '@/hooks/useFetch'
import { useRecoilState } from 'recoil'
import { editItemAtom, editStateAtom } from '@/atoms/atoms'
import ReactMarkDown from 'react-markdown'
import API from '@/apis'

const PostOrganisms = (props: PostType) => {
  const [edit, setEdit] = useRecoilState(editStateAtom)
  const [editContent, setEditContent] = useRecoilState(editItemAtom)
  const router = useRouter()
  const { fetch, data, isLoading } = useFetch({
    url: `/group/${router.query.id}/board/${router.query.postId}`,
    method: 'PATCH',
    onSuccess: () => {
      router.reload()
    },
  })

  useEffect(() => {
    console.log(router)
    setEditContent({ title: props.title, content: props.content })
    setEdit(false)
  }, [props, router])

  const editOnClick = () => {
    setEdit(!edit)
    setEditContent({ title: props.title, content: props.content })
  }

  const onChange = (event: any) => {
    setEditContent({ title: editContent.title, content: event.target.value })
  }

  const delOnClick = () => {
    const confState = confirm('정말 삭제하시겠습니까?')
    if (confState === true) {
      API({
        method: 'DELETE',
        url: `/group/${router.query.id}/board/${router.query.postId}`,
      })
      router.replace(`/group/${router.query.id}`)
    }
  }

  const btnOnClick = () => {
    if (!isLoading) {
      fetch({
        title: editContent.title,
        content: editContent.content,
      })
    }
    console.log(editContent.title)
  }

  return (
    <S.PostOrganisms>
      <PostInfo {...props} />
      <hr />
      <S.EditTab>
        <span onClick={editOnClick}>수정</span>
        <span onClick={delOnClick}>삭제</span>
      </S.EditTab>
      {edit === true ? (
        <>
          <S.EditArea
            onChange={onChange}
            value={editContent.content}
          ></S.EditArea>
          <Button
            onClick={btnOnClick}
            width='120px'
            height='30px'
            borderRadius='5px'
            border='none'
            background='#3355CD'
            children={<div>수정</div>}
            color='#fff'
            fontSize='18px'
          />
        </>
      ) : (
        <ReactMarkDown className='MarkDownContent'>
          {props.content}
        </ReactMarkDown>
      )}
    </S.PostOrganisms>
  )
}

export default PostOrganisms
