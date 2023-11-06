import PostInfo from '../../molecules/PostInfo'
import * as S from './style'

const PostOrganisms = () => {
  return (
    <S.PostOrganisms>
      <PostInfo />
      <hr />
      <S.PostContent>
        하늘에서 내려온 천사가 발로 걸어다니는 날개없는 강림에서 도착한 역
        앞에있는 사람 하나가 왜 저 하늘보다 밝은 빛을 내는 것일까 세상은 정말
        하늘보다 밝은것일까 세상에 하늘은 검은 우주를 보여주는데 왜 무엇보다
        순수하다고 알려져있는것인지, 파란빛은 하늘보다 바다에서 더 빛나는데
        도대체 알 수가 없는 그 찬란한 자태를 무시하는 것인지 잘 모르겠다
      </S.PostContent>
      <S.ImgTitle>고양이 사진 공유</S.ImgTitle>
      <img src='https://e.snmc.io/i/fullres/w/58c6ddcaf4bea45f06ddda5542d2328c/10085703'></img>
    </S.PostOrganisms>
  )
}

export default PostOrganisms
