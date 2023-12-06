import { ButtonProps } from '@/types/components/common/ButtonProps'
import styled from '@emotion/styled'

export const BoardInfo = styled.div`
  width: 300px;

  img {
    width: 280px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
  }

  .board-name {
    margin-top: 0.5em;
    font-size: 24px;
    font-weight: 600;
  }

  .board-desc {
    font-weight: 200;
    font-size: 18px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`
export const buttonContent: ButtonProps = {
  children: '글쓰기',
  width: '280px',
  height: '2.5em',
  fontSize: '20px',
  border: 'none',
  background: '#3355CD',
  color: '#fff',
  borderRadius: '10px',
}
