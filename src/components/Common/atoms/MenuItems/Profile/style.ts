import { ProfileURLPropsType } from '@/types/components/common/ProfileURLPropsType'
import styled from '@emotion/styled'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
