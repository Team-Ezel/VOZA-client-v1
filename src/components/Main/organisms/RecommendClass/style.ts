import styled from '@emotion/styled'

export const RecommendClassWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2vh;
  justify-content: center;
  background-color: #eff0f4; 
`
export const RecommendClass = styled.div`
  width: 970px;
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
    // 모니터
  }
`


export const titleWrapper = styled.div`
  font-weight: 600;
  font-size: 28px;
  width: 65%;
  margin-bottom: 2vh;
`
