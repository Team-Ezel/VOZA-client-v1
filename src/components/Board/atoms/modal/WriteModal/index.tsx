import { useRecoilState } from 'recoil'
import * as S from './style'
import { boardModalAtom } from '@/atoms/atoms'
import NoPostSvg from '@/assets/svgs/NoPostSvg'
import NoVoteSvg from '@/assets/svgs/NoVoteSvg'
import { Arrow_down } from '@/assets/svgs'

const WriteModal = () => {
  const [modalState, setModalState] = useRecoilState(boardModalAtom)

  const onClick = () => {
    setModalState(!modalState)
  }

  return (
    <S.ModalWrapper onClick={onClick}>
      <S.WriteModal>
        <S.WriteModalTitle>글쓰기</S.WriteModalTitle>
        <S.WriteModalText>어떤 글을 작성하실 건가요?</S.WriteModalText>
        <S.WriteModalOption>
          <NoPostSvg />
          <div>게시글 작성</div>
        </S.WriteModalOption>
        <S.WriteModalOption>
          <NoVoteSvg />
          <div>투표글 작성</div>
        </S.WriteModalOption>
      </S.WriteModal>
    </S.ModalWrapper>
  )
}

export default WriteModal
