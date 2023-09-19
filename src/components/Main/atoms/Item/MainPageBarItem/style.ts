import styled from '@emotion/styled'

export interface MainPageBarItemWrapperProps {
    toColor: string 
}

export interface LineProps {
    toDisplay: boolean 
}

export const MainPageBarItemWrapper = styled.div<MainPageBarItemWrapperProps>`
  font-size: 28px;
  font-weight: 600;
  a {
    color: ${(props)=>props.toColor};
  }
`

export const Line = styled.div<LineProps>`
  height: 2.8px;
  width: 100%;
  display: ${(props)=>props.toDisplay?"block":"none"};
  background-color: #000;
`
