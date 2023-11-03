import styled from '@emotion/styled'

export const MyClassList = styled.div`
  display: flex;
  gap: 1rem 1.05rem;
  flex-wrap: wrap;
  width: 970px;
  padding: 0 0 0 0;
  @media (max-width: 1634px) {
    // 노트북
    width: 970px;
  }

  @media (max-width: 970px) {
    width: 574px;
    // 테블릿
  }

  @media (max-width: 590px) {
    width: 378px;
  }

  @media (max-width: 420px) {
    // 폰
  }

  @media (min-width: 1950px) {
    width: 970px;
    // 모니터
  }
`
