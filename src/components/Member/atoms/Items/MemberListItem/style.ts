import { ProfileURLPropsType } from '@/types/components/common/ProfileURLPropsType'
import styled from '@emotion/styled'

export const MemberItemContainer = styled.div`
  width: 35.5rem;
  height: 5.625rem;
  flex-shrink: 0;
  padding-left: 50px;
  padding-right: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MemberProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const MemeberProfileImg = styled.div<ProfileURLPropsType>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-image: url(${(props) => props.ProfileImgURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const MemberName = styled.span`
  margin-left: 15px;
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const MemberSetting = styled.div``
