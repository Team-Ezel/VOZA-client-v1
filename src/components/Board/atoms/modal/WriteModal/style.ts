import styled from '@emotion/styled'

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(25, 25, 25, 0.3);
  z-index: 3;
  top: 0px;
  left: 0px;
  overflow-y: hidden;
`

export const WriteModal = styled.div`
  background-color: #fff;
  width: 40em;
  font-size: 18px;
  height: 15em;
  padding: 1em;
  border-radius: 1em;
`

export const WriteModalTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`
export const WriteModalText = styled.div`
  color: #656b80;
`

export const WriteModalOption = styled.div`
  width: 34em;
  height: 4em;
  font-size: 20px;
  margin-top: 10px;
  background-color: #f7f8fa;
  border-radius: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #414654;
  padding-left: 3em;
  cursor: pointer;

  svg {
    width: 30px;
    height: auto;
  }

  div {
    margin-left: 2em;
  }
`

export const RightArrowSvg = styled.div`
  margin-left: auto;
`
