import styled from "@emotion/styled"

interface nameWrapperPropsTypes {
    color: string
    backgroundColor: string
}

export const CalenderItemWrapper = styled.div`

width: 13%;
height: 100%;
display: flex;
justify-content: center;
`

export const nameWrapper = styled.div<nameWrapperPropsTypes>`
margin-top: 5px;
width: 1.4rem;
height: 1.4rem;
border-radius: 100%;
cursor: pointer;
font-size: 15px ;
background-color: ${props => props.backgroundColor};
color: ${props => props.color};
display: flex;
align-items: center;
text-align: center;
justify-content: center;
`