import styled from '@emotion/styled'

export const MemberListContainer = styled.div`
  width: 35.5rem;
  height: 38rem;
  flex-shrink: 0;

  border-radius: 0.9375rem;
  background: #fff;

  margin-top: 50px;

  overflow: scroll;

  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`

export const Title = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 30px;
  margin-left: 35px;
`

export const InviteText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.005rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  margin-right: 40px;
  margin-top: 40px;

  span {
    cursor: pointer;
  }
`

export const LeaveGroup = styled.div`
  color: #ff3120;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  margin-left: 40px;
`
