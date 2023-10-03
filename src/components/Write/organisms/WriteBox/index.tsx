import Button from '@/components/Common/atoms/Button/Button'
import Contents from '../../molecules/Contents'
import * as S from './style'
export default function WriteBox() {
  return (
    <S.background>
      <S.WriteBoxWrapper>
        <S.TitleWrapper>
          <S.Title>게시글 작성</S.Title>
          <S.SubTitle>새로운 게시글을 올려보세요!</S.SubTitle>
        </S.TitleWrapper>
        <Contents />
        <S.ButtonWrapper>
          <Button
            children='등록하기'
            width='120px'
            height='38px'
            color='#fff'
            background='#3355CD'
            fontSize='14px'
            fontWeight='400'
            border='0'
            borderRadius='5px'
            onClick={() => {}}
          />
        </S.ButtonWrapper>
      </S.WriteBoxWrapper>
    </S.background>
  )
}
