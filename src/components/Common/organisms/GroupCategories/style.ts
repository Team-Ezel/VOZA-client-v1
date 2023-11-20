import styled from '@emotion/styled'
import Link from 'next/link'

export const CategoriesBlock = styled.div`
  position: sticky;
  width: 100%;
  height: 45px;
  top: 55px;
  background-color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Category = styled(Link)`
  margin: 0px 40px;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;

`
