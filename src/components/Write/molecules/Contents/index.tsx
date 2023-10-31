import { ContentsPropsType } from '@/types/components/Write/ContentsType'
import Category from '../../atoms/Category'
import ContentInput from '../../atoms/ContentInput'
import NameInput from '../../atoms/NameInput'
import * as S from './style'
import Toolbar from '../Toolbar'
import { useRef } from "react"


export default function Contents({ name, setName, category, setCategory, contents, setContents }: ContentsPropsType) {

  return (
    <S.contentsWrapper>
      <S.contentWrapper>
        <S.NameWrapper>제목</S.NameWrapper>
        <NameInput
          name={name}
          setName={setName}
        />
      </S.contentWrapper>
      <S.contentWrapper>
        <S.NameWrapper>카테고리</S.NameWrapper>
        <S.OptionWrapper>
          <Category category={category} setCategory={setCategory} />
          <Toolbar
            contents={contents}
            setContents={setContents}
          />
        </S.OptionWrapper>
      </S.contentWrapper>
      <S.contentWrapper>
        <ContentInput
          contents={contents}
          setContents={setContents}
        />
      </S.contentWrapper>
    </S.contentsWrapper>
  )
}
