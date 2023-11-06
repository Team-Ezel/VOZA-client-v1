import Header from '@/components/Common/organisms/Header'
import PostOrganisms from '../../organisms/PostOrganisms'
import * as S from './style'

const PostTemplates = () => {
  return (
    <>
      <Header />
      <S.PostTemplates>
        <PostOrganisms />
      </S.PostTemplates>
    </>
  )
}

export default PostTemplates
