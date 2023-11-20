import { useEffect } from 'react'
import * as S from './style'
import { useRouter } from 'next/router'
import TokenManager, { TokensType } from '@/apis/TokenManager'
import axios from 'axios'
import { useLoginCheck } from '@/hooks/useLoginCheck'

const LoginBtn = () => {
  const baseurl = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const param = router.query.code
  const loginCheck = useLoginCheck()

  const loginRedirect = () => {
    window.location.href = '/login'
  }

  useEffect(() => {
    if (param != undefined) {
      login()
    } else {
      if (loginCheck) {
        router.replace('/main')
      }
    }
  }, [param])

  const login = async () => {
    if (param != undefined) {
      const _response: any = await axios({
        method: 'get',
        url: `${baseurl}/oauth2/kakao?code=${param}`,
      })

      const resData: TokensType = _response.data
      console.log(resData)

      const tokenManager = new TokenManager()

      tokenManager.setTokens(resData)

      router.replace('')

      return resData
    }
  }

  return (
    <S.LoginBtn>
      <button onClick={loginRedirect}>
        <span>카카오톡으로 로그인</span>
      </button>
    </S.LoginBtn>
  )
}

export default LoginBtn
