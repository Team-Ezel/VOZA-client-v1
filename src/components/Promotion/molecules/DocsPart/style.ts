import styled from '@emotion/styled'

export const TitleText = styled.h1`
  font-size: 50px;
  padding-bottom: 1rem;
  @media (max-width: 1634px) {
    font-size: 40px;
    // 노트북
  }

  @media (max-width: 950px) {
    font-size: 30px;
    // 테블릿
  }

  @media (max-width: 420px) {
    font-size: 20px;
    // 폰
  }

  @media (min-width: 1920px) {
    font-size: 50px;
    // 모니터
  }
`

export const DetailText = styled.p`
  font-size: 20px;
  @media (max-width: 1634px) {
    font-size: 16px;
    // 노트북
  }

  @media (max-width: 950px) {
    font-size: 12px;
    // 테블릿
  }

  @media (max-width: 420px) {
    font-size: 8px;
    // 폰
  }

  @media (min-width: 1950px) {
    // 모니터
  }
`
