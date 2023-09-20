import styled from '@emotion/styled'

export const NewClassModalWrapper = styled.div`
  z-index: 4;
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(25, 25, 25, 0.3);
`

export const ModalInsideWrapper = styled.div`
  background-color: #fff;
  height: 500px;
  width: 400px;
  border-radius: 15px;
  padding: 28px;
`

export const TitleWrapper = styled.div`
font-size: 22px;
font-weight: 600;
`
export const SubTitleWrapper = styled.div`
font-weight: 500;
font-size: 16px;
color: #656B80;
`