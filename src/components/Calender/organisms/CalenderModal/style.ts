import styled from "@emotion/styled"


export const CalenderModal = styled.div`
 z-index: 4;
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(25, 25, 25, 0.3);
`

export const CalenderModalWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  padding: 25px 20px;
  justify-content: space-between;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const OptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const InputWrapper = styled.input`
  padding: 0 15px;
  width: 100%;
  height: 50px;
  background-color: #F7F7F8;
  border-radius: 5px;
  outline: none;
  border: 0;
  color: #656B80;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const ContentInputWrapper = styled.textarea`
  padding: 15px;
  width: 100%;
  height: 130px;
  background-color: #F7F7F8;
  border-radius: 5px;
  border: 0;
  outline: none;
  resize: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
