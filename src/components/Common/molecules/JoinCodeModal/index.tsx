import useFetch from '@/hooks/useFetch'
import * as S from './style'
import { useState } from 'react'
import { toast } from 'react-toastify'
import toastOption from '@/lib/toastOptions'
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
    url: `/group/ener/security`,
    method: 'POST',
    onSuccess: () => {
      toast.success('그룹가입에 성공했습니다')
    },
    onFailure: (e) => {
      toast.error('오류가 발생했습니다')
    },
  })
  const handleSubmit = () => {
    if (!isLoading && data) {
      fetch({
        email: data.email,
        inviteCode: joinCode,
      })
      setCodeClicked(false)
    }
    toast.success('dd')
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
