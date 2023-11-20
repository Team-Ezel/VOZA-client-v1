import { PostType } from '@/types/components/post/PostType'
import * as S from './style'

const PostInfo = (props: PostType) => {
  return (
    <S.PostInfo>
      <S.PostTitle>{props.title}</S.PostTitle>
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
