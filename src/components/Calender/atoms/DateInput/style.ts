import styled from "@emotion/styled"

interface DateInputPropsType {
    width: string
    height: string
    fontSize: string
    fontWeight: string
    color: string
    backgroundColor: string
    border: string
    borderRadius: string
}

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: fit-content;
    height: fit-content;
    align-items: center;
`

export const DateInput = styled.input<DateInputPropsType>`
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius};
    padding: 15px 38px 15px 15px;
    outline: none;
`

export const SvgWrapper = styled.div`
margin-right: 10px;
height: fit-content;
width: fit-content;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`