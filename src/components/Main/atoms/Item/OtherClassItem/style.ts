import styled from '@emotion/styled'

export const OtherClassItemWrapper = styled.div`
  cursor: pointer;
  border-radius: 10px;
  fill: #fff;
  filter: drop-shadow(0px 0px 10px rgba(154, 154, 154, 0.25));
  height: 170px;
  width: 470px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fff;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`
export const thumbnailWrapper = styled.div`
  overflow: hidden;
  width: 37%;
  height: 70%;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const TitleWrapper = styled.label`
  font-size: 20px;
  font-weight: 600;
`
export const InformationWrapper = styled.div`
  margin-left: 1rem;
  height: 70%;
  width: 53%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 0;
    color: #000000;
    font-weight: 300;
    font-size: 14px;
    max-width: 100%;
    word-break: normal;
    text-overflow: ellipsis;
    word-break: keep-all;
    transform: translateY(-30%);
  }
`
export const TagsLIstWrapper = styled.div`
  gap: 0.5rem;
  display: flex;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  flex-direction: row;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const TagsItemWrapper = styled.div`
  height: 4vh;
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 0 7%;
  display: flex;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  align-items: center;
`
