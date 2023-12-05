import axios from 'axios'
import TokenManager, { TokensType } from './TokenManager'
import { accessToken, refreshToken } from '@/lib/token'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  withCredentials: true,
})

const reIssueToken = async (tokens: any) => {
  const _response = await axios({
    url: 'https://port-0-voza-koh2xljfbuiob.sel4.cloudtype.app/auth',
    method: 'PATCH',
    headers: {
      'Refresh-token': tokens,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  console.log(_response)
}

API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()

  if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken,
    ) &&
    tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken,
    )
  ) {
    tokenManager.initToken()
    //reIssueToken(tokenManager.refreshToken)
  } else if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken,
    ) &&
    !tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken,
    )
  ) {
    tokenManager.removeTokens()
    console.log('2')
  }

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined

  return config
})

export default API
