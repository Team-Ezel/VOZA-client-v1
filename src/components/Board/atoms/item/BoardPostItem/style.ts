import styled from '@emotion/styled'

export const BoardPostItem = styled.div`
  font-size: 14px;
  width: 500px;
  background-color: #fff;
  margin-bottom: 20px;
  height: 5.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2rem;
  margin-top: 0.5em;
  padding-top: 1em;
  border-radius: 5px;
  font-weight: 500;
  margin-right: 10px;

  .post-title {
    font-size: 18px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  .createdDate {
    width: 10em;
  }
`

export const boardType = styled.div`
  margin-top: 0.8em;
  width: 4em;
  height: 18px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  text-align: center;
`

export const postInfo = styled.div`
  padding-top: 2em;
  padding-right: 2rem;
  color: #999999;
  text-align: right;
`

export const listType = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
`
