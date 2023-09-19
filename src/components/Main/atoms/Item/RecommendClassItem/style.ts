import styled from '@emotion/styled'

export const RecommendClassItemWrapper = styled.div`
  height: 18vh;
  width: 68vh;
  display: flex;
  align-items: center;
`

export const thumbnailWrapper = styled.div`
  overflow: hidden;
  height: 94%;
  width: 33%;
  border-radius: 15px;
  img {
    height: 100%;
    object-fit: cover;
  }
  margin-right:1rem ;
`
export const TitleWrapper = styled.label`
  font-size: 20px;
  font-weight: 600;
`
export const InformationWrapper = styled.div`
  height: 80%;
  width: 55%;
  font-size: 12px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  p {
    margin: 0;
    color: #000000;
    font-weight: 300;
    font-size: 16px;
    max-width: 100%;
    word-break: normal;
    text-overflow: ellipsis;
    word-break: keep-all;
    
  }
`
export const DetailClassButton = styled.div`
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 56%;
  padding-left: 15%;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 400;
`
