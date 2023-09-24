import styled from '@emotion/styled'

export const MyClassItemWrapper = styled.div`
  cursor: pointer;
  background-color: #fff;
  border-radius: 15px;
  height: 212px;
  width: 180px;
  overflow: hidden;
  :hover{
    transform: translateY(-1%);
  }
`

export const thumbnailWrapper = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
  height: 64%;
  width: 100%;
  overflow: hidden;
`

export const TitleWrapper = styled.label`
  font-size: 19px;
  font-weight: 500;
`

export const InformationWrapper = styled.div`
  font-size: 12px;
  p {
    margin: 0;
    color: #999;
  }
`
