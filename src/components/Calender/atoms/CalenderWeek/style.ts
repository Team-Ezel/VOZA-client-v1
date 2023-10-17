import styled from "@emotion/styled"

interface CalenderWeekItemPropsTypes {
    color: string
}

export const CalenderWeekList = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const CalenderWeekItem = styled.div<CalenderWeekItemPropsTypes>`
color: ${props => props.color};
width: 13%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 1.2%;
`