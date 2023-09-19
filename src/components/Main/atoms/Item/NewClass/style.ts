import styled from '@emotion/styled'

export const NewClassWrapper = styled.div`
  cursor: pointer;
  background-color: #fff;
  border-radius: 15px;
  height: 30vh;
  width: 26vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  :hover{
    transform: translateY(-1%);
  }
  svg {
    width: 86%;
  }
  p {
    font-weight: 500;
    font-size: 20px;
  }

`

export const InformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`
