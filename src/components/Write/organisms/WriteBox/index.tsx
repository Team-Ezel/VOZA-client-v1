import Button from '@/components/Common/atoms/Button/Button'
import Contents from '../../molecules/Contents'
import { useState } from 'react'
import * as S from './style'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'

export default function WriteBox() {
  const [name, setName] = useState<string>('')
  const [category, setCategory] = useState('NORMAL')
  const [contents, setContents] = useState('')
  const router = useRouter()
  const { fetch, isLoading } = useFetch({
    url: `group/${router.query.id}/board`,
    method: 'POST',
    onSuccess: () => {
      router.push(`/group/${router.query.id}`)
    },
  })

  const WriteUpload = () => {
    if (!isLoading) {
      fetch({
        title: name,
        content: contents,
        boardType: category,
      })
    }
  }

  return (
    <S.background>
      <S.WriteBoxWrapper>
        <S.TitleWrapper>
          <S.Title>게시글 작성</S.Title>
          <S.SubTitle>새로운 게시글을 올려보세요!</S.SubTitle>
        </S.TitleWrapper>
        <Contents
          name={name}
          setName={setName}
          category={category}
          setCategory={setCategory}
          contents={contents}
          setContents={setContents}
        />
        <S.ButtonWrapper>
          <Button
            width='120px'
            height='38px'
            color='#fff'
            background='#3355CD'
            fontSize='14px'
            fontWeight='400'
            border='0'
            borderRadius='5px'
            onClick={() => WriteUpload()}
          >
            등록하기
          </Button>
        </S.ButtonWrapper>
      </S.WriteBoxWrapper>
    </S.background>
  )
}
