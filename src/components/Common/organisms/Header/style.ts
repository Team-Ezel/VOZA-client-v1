import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 55px;
  z-index: 2;
  border-bottom: 1px solid #dadada;
  background: #fff;

  .block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const VozaLogo = styled.div`
  padding-right: 2vw;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
