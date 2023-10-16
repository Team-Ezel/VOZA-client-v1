import styled from '@emotion/styled'

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: rgba(25, 25, 25, 0.3);
`

export const ModalWrapper = styled.div`
  padding: 29px;
  width: 24.875rem;
  height: 11.75rem;
  flex-shrink: 0;

  background-color: #fff;

  border-radius: 0.9375rem;
  background: #fff;
`

export const Title = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`

export const Subtitle = styled.p`
  margin-top: 2px;
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 50px;
`
