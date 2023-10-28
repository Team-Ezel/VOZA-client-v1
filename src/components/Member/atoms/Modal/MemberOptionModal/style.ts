import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 10px;
  width: 120px;
  height: 160px;
  border-radius: 0.75rem;
  background: #fff;
  filter: drop-shadow(0px 4px 6px rgba(154, 154, 154, 0.25));
`
export const ModalOption = styled.p`
  display: flex;
  cursor: pointer;
  color: #000;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  margin-top: 1.3vh;
  align-items: center;
`

export const AssetsWrapper = styled.div`
  padding-left: 3px;
  margin-top: 3px;
  align-items: center;
`

export const MemberSetting = styled.div`
  position: relative; /* '상대 위치'로 설정 */
`
