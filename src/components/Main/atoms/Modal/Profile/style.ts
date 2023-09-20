import styled from '@emotion/styled'

export const ClassProfileWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`

export const ProfileWrapper = styled.div`
width: 100%;
height: 100%;
`

export const Profile = styled.div`
  margin-top: 17px;
  width: 100%;
  height: 60%;
  border-radius: 9px;
  background-color: #f2f2f4;
`

export const ProfileButtonWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  input{
    display: none;
  }
`

export const AddProfileButton = styled.label`
  width: 6rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  background-color: #f2f2f4;
  justify-content: center;
  border-radius: 8px;
  p {
    font-size: 14px;
    color: #656B80;;
  }
  svg {
    height: 60%;
  }

`
