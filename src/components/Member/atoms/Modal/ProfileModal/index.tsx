import React from 'react'
import * as S from './style'
import { Default_profile } from '@/assets/svgs'
import GroupItem from '../../ModalItems/GroupItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const ExampleData = [
  {
    GroupImgURL:
      'https://i.namu.wiki/i/jtHUuOemnnqVt_nIYKFc0menq3XgzTF7tLKYUU7CBpXAyWksrkzDyfqeRJA-AEsOXAbwKfMekBtLxGxxtTncwQ.webp',
    GroupName: '5☀️1',
  },
  {
    GroupImgURL:
      'https://i.namu.wiki/i/jtHUuOemnnqVt_nIYKFc0menq3XgzTF7tLKYUU7CBpXAyWksrkzDyfqeRJA-AEsOXAbwKfMekBtLxGxxtTncwQ.webp',
    GroupName: '5☀️1',
  },
  {
    GroupImgURL:
      'https://i.namu.wiki/i/jtHUuOemnnqVt_nIYKFc0menq3XgzTF7tLKYUU7CBpXAyWksrkzDyfqeRJA-AEsOXAbwKfMekBtLxGxxtTncwQ.webp',
    GroupName: '5☀️1',
  },
  {
    GroupImgURL:
      'https://i.namu.wiki/i/jtHUuOemnnqVt_nIYKFc0menq3XgzTF7tLKYUU7CBpXAyWksrkzDyfqeRJA-AEsOXAbwKfMekBtLxGxxtTncwQ.webp',
    GroupName: '5☀️1',
  },
]

const ProfileModal = () => {
  const slidesPerView = ExampleData.length > 3 ? 3 : ExampleData.length

  return (
    <S.Main>
      <S.ModalWrapper>
        <Default_profile width={100} height={100} />
        <S.Name>윤수용</S.Name>
        <S.Message>안녕하세요🤗 저는 윤수용입니다.</S.Message>
        <S.ProfileGroupText>가입되어 있는 소모임</S.ProfileGroupText>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {ExampleData.map((data) => (
            <SwiperSlide key={data.GroupName}>
              <GroupItem
                GroupImgURL={data.GroupImgURL}
                GroupName={data.GroupName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ModalWrapper>
    </S.Main>
  )
}

export default ProfileModal
