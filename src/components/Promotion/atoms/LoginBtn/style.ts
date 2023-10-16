import styled from '@emotion/styled'

export const LoginBtn = styled.div`
  button {
    @media (max-width: 1634px) {
      font-size: 18.7px;
      border-radius: 9px;
      // 노트북
    }

    @media (max-width: 950px) {
      font-size: 11px;
      border-radius: 6px;
      // 테블릿
    }

    @media (max-width: 420px) {
      font-size: 4px;
      border-radius: 3px;
      // 폰
    }

    @media (min-width: 1920px) {
      font-size: 22px;
      border-radius: 12px;
      // 모니터
    }
    width: 14.5em;
    height: 3.5em;
    font-size: 22px;
    font-family: Pretendard;
    border: none;
    background-color: #2260ff;
    color: #fff;
    margin-top: 4rem;
    font-weight: 200;
    cursor: pointer;
  }
`
