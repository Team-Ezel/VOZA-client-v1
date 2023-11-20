import Header from '@/components/Common/organisms/Header'
import PostOrganisms from '../../organisms/PostOrganisms'
import * as S from './style'
import { useEffect, useState } from 'react'
import API from '@/apis'
import { useRouter } from 'next/router'
import { PostType } from '@/types/components/post/PostType'

const PostTemplates = () => {
  const id = useRouter().query.id
  const postId = useRouter().query.postId
  const [postContent, setPostContent] = useState<PostType>({
    boardId: 0,
    title: '',
    author: '',
    createdDate: '',
    content: '',
  })

  useEffect(() => {
    getPost()
  }, [id, postId])

  const getPost = async () => {
    const _postContent: any = await API({
      url: `/group/${id}/board/${postId}`,
      method: 'get',
    })
    console.log(_postContent)
    setPostContent(_postContent.data)
  }

  return (
    <>
      <Header />
      <S.PostTemplates>
        <PostOrganisms {...postContent} />
      </S.PostTemplates>
    </>
  )
}

export default PostTemplates
