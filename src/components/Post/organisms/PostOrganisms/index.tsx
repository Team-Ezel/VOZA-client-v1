import PostInfo from '../../molecules/PostInfo'
import * as S from './style'
import { PostType } from '@/types/components/post/PostType'
import { useEffect } from 'react'

const PostOrganisms = (props: PostType) => {
  useEffect(() => {
    console.log(props)
  })
  return (
    <S.PostOrganisms>
      <PostInfo {...props} />
      <hr />
      <S.PostContent>{props.content}</S.PostContent>
    </S.PostOrganisms>
  )
}

export default PostOrganisms
