import styled from '@emotion/styled'

interface NoticeWrapperprops{
    toDisplay:string
}

export const ClassNameWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`

export const ClassNameInputBox = styled.input`
  height: 54px;
  margin-top: 7%;
  width: 100%;
  border: 0px;
  outline: none;
  background-color: #f2f2f4;
  border-radius: 7px;
  padding-left: 15px;
  color: #656B80;
  font-size: 16px;
`
export const NoticeWrapper = styled.div<NoticeWrapperprops>`
margin: 5px 0 0 7px;
font-size: 14px;
color: #FF3120;
display: ${(props)=>props.toDisplay};
`
