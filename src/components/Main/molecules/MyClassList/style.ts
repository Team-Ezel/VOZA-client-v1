import styled from '@emotion/styled'

export const MyClassList = styled.div`
  width: 858px;
  display: flex;
  gap: 1rem 1.05rem;
  flex-wrap: wrap;
  @media (max-width: 1634px) {
    // 노트북
    width: 858px;
  }

  @media (max-width: 950px) {
   width: 508px;
    // 테블릿
  }

  @media (max-width: 420px) {
    // 폰
  }

  @media (min-width: 1950px) {
    // 모니터
  }
`
