import { useRecoilState } from 'recoil'
import * as S from './style'
import { boardModalAtom } from '@/atoms/atoms'
import NoPostSvg from '@/assets/svgs/NoPostSvg'
import NoVoteSvg from '@/assets/svgs/NoVoteSvg'
import RightArrow from '@/assets/svgs/Right_arrow'
import Link from 'next/link'
import { useRouter } from 'next/router'

const WriteModal = () => {
  const [modalState, setModalState] = useRecoilState(boardModalAtom)
  const params = useRouter().query.id

  const onClick = () => {
    setModalState(!modalState)
  }

  return (
    <S.ModalWrapper onClick={onClick}>
      <S.WriteModal>
        <S.WriteModalTitle>글쓰기</S.WriteModalTitle>
        <S.WriteModalText>어떤 글을 작성하실 건가요?</S.WriteModalText>
        <S.WriteModalOption>
          <Link href={`/group/${params}/postWrite`}>
            <NoPostSvg />
            <div>게시글 작성</div>
            <S.RightArrowSvg>
              <RightArrow />
            </S.RightArrowSvg>
          </Link>
        </S.WriteModalOption>

        <S.WriteModalOption>
          <Link href={`/group/${params}/voteWrite`}>
            <NoVoteSvg />
            <div>투표글 작성</div>
            <S.RightArrowSvg>
              <RightArrow />
            </S.RightArrowSvg>
          </Link>
        </S.WriteModalOption>
      </S.WriteModal>
    </S.ModalWrapper>
  )
}

export default WriteModal
