import styled from '@emotion/styled'

interface CalenderLinePropsType {
    BackgroundColor: string
}

export const CalenderBoxWrapper = styled.div`

`

export const CalenderLine = styled.div<CalenderLinePropsType>`
width: 100%;
height: 1px;
background-color: ${props => props.BackgroundColor};
`