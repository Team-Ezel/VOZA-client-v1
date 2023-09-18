import styled from "@emotion/styled";

interface OtherClassFilterItemPropsType {
    toColor:boolean
}

export const OtherClassFilterItem = styled.div<OtherClassFilterItemPropsType>`
border-radius: 7px;
background-color: ${(props)=>props.toColor?"#3355CD":"#fff"};
color:${(props)=>props.toColor?"#F7F8FA":"#000000"};
font-weight: 500;
font-size: 16px;
padding-top: 2vh;
padding-bottom: 2vh;
padding-left: 3.5vh;
padding-right: 3.5vh;
transition: left 0.5s;
filter: drop-shadow(0px 0px 5px rgba(167, 167, 167, 0.25));
`