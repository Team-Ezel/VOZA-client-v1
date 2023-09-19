import styled from '@emotion/styled'

export const ChatModalWrapper = styled.div`
  position: fixed;
  margin-top: 55px;
  margin-right: 25vw;
  padding: 10px;
  width: 400px;
  border-radius: 0.75rem;
  background: #fff;
  filter: drop-shadow(0px 4px 6px rgba(154, 154, 154, 0.25));
`

export const ChatModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;

  h3 {
    color: #000;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 5px;
  }
`

export const ChatContent = styled.div`
  p {
    text-align: center;
    color: #454545;
    font-size: 15px;
    margin-bottom: 20px;
  }
`
