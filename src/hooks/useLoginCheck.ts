import TokenManager from '@/apis/TokenManager'

export const useLoginCheck = () => {
  const tokenManager = new TokenManager()

  if (
    tokenManager.validateToken(tokenManager.accessExp, tokenManager.accessToken)
  ) {
    return true
  } else if (
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
    return true
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
  }
  return false
}
