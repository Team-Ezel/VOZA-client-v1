import styled from '@emotion/styled'

export const MyClassItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  height: 30vh;
  width: 26vh;
  overflow: hidden;
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
