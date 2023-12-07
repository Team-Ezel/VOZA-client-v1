import useFetch from '@/hooks/useFetch'
import * as S from './style'
import { useState } from 'react'

interface JoinCodeModalPropsType {
  setCodeClicked: React.Dispatch<React.SetStateAction<boolean>>
  data: {
    email?: string
  } | null
  isLoading: boolean
}

export default function JoinCodeModal({
  setCodeClicked,
  data,
  isLoading,
}: JoinCodeModalPropsType) {
  const [joinCode, setJoinCode] = useState('')
  const { fetch } = useFetch({
    url: `email`,
    method: 'POST',
  })
  const handleSubmit = () => {
    if (!isLoading && data) {
      fetch({
        email: data.email,
        inviteCode: joinCode,
      })
      setCodeClicked(false)
    }
  }
  return (
    <>
      <S.backGroundModal onClick={() => setCodeClicked(false)} />
      <S.JoinCodeModalWrapper>
        <S.Title>초대코드로 그룹가입</S.Title>
        <form onSubmit={handleSubmit}>
          <S.JoinCodeInput
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
          />
        </form>
      </S.JoinCodeModalWrapper>
    </>
  )
}
