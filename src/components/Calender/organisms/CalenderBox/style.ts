import styled from '@emotion/styled'

interface CalenderLinePropsType {
    BackgroundColor: string
}

export const CalenderBoxWrapper = styled.div`
 background-color: #fff;
 width: 28vw;
 height: 58vh;
 border-radius: 10px;
 padding-top: 10px;
`

export const CalenderLine = styled.div<CalenderLinePropsType>`
width: 100%;
height: 1px;
background-color: ${props => props.BackgroundColor};
`


