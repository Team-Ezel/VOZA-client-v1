import styled from "@emotion/styled"

export const ChatGroupItemWrapper = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    gap: 15px;
`

export const ImageWrapper = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const Title = styled.div`
color: #000;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const ChatPreviewWrapper = styled.div`
    color: #454545;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`