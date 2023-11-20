import { ProfileURLPropsType } from '@/types/components/common/ProfileURLPropsType'
import styled from '@emotion/styled'

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: rgba(25, 25, 25, 0.3);

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ModalContainer = styled.div`
  width: 29.875rem;
  height: 35.9375rem;
  flex-shrink: 0;

  border-radius: 0.9375rem;
  background-color: #fff;

  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding-top: 20px;
`

export const ProfileGroupText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 60px;
  margin-bottom: 30px;
`


export const MemeberProfileImg = styled.div<ProfileURLPropsType>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.ProfileImgURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`