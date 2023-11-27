import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Default_profile } from '@/assets/svgs';
import GroupItem from '../../ModalItems/GroupItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useFetch from '@/hooks/useFetch';

type GroupData = {
  groupId: number;
  groupFileUrl: string;
  groupName: string;
};

type ProfileModalProps = {
  nickname: string;
  profileUrl: string;
  memberId: number;
  onClose: () => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({
  onClose,
  nickname,
  profileUrl,
  memberId,
}) => {
  const baseurl: string | undefined = process.env.NEXT_PUBLIC_BASEURL;
  const [joinGroupList, setJoinGroupList] = useState<GroupData[]>([]);
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { isLoading, fetch, data } = useFetch<{ joinedGroupList: GroupData[] }>({
    url: `${baseurl}/user/otherProfile/${memberId}`,
    method: 'GET',
  });

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (data && data.joinedGroupList) {
      setJoinGroupList(data.joinedGroupList);
    }
  }, [data]);

  const slidesPerView = joinGroupList.length > 3 ? 3 : joinGroupList.length;

  return (
    <S.Main onClick={handleModalClick}>
      <S.ModalContainer>
        <S.MemeberProfileImg ProfileImgURL={profileUrl} />
        <S.Name>{nickname}</S.Name>
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
          {joinGroupList.map((data) => (
            <SwiperSlide key={data.groupId}>
              <GroupItem
                GroupImgURL={data.groupFileUrl}
                GroupName={data.groupName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ModalContainer>
    </S.Main>
  );
};

export default ProfileModal;
