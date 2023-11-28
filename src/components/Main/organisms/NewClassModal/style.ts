import styled from '@emotion/styled'

export const NewClassModalWrapper = styled.div`
  z-index: 4;
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalInsideWrapper = styled.div`
position: absolute;
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

export const ModaloutsideWrapper = styled.div`
width: 100%;
height: 100%;
background: rgba(25, 25, 25, 0.3);
`