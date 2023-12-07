import styled from '@emotion/styled'

interface VoteColorBarProps {
  selected: boolean
  ratio: number
}

export const VoteBar = styled.div`
  width: 28.75rem;
  height: 3.375rem;
  border-radius: 0.3125rem;
  background: #f2f2f4;
  margin-bottom: 1rem;
  position: relative; /* 부모 요소로부터 상대적인 위치 설정 */
`

export const Detail = styled.div`
  height: 100%;
  padding-left: 10px;
  z-index: 2; /* VoteColorBar 위에 표시되도록 설정 */
  position: absolute; /* 위치를 부모에 대해 절대적으로 설정 */
  color: #fff;
  font-size: 1.325rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`

export const VoteColorBar = styled.div<VoteColorBarProps>`
  height: 100%;
  width: ${({ ratio }) => ratio * 100}%;
  background-color: ${({ selected }) => (selected ? '#3355CD' : '#9ca1b1')};
  border-radius: 0.3125rem;
  z-index: 1; /* VoteColorBar를 Detail 위에 표시 */
`
