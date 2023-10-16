import GroupInfoItem from '@/components/Common/atoms/Group/Item/GroupInfoItem'
import React from 'react'
import MemberList from '../../molecules/MemberList'

const MemberOrganisms = () => {
  return (
    <>
      <GroupInfoItem
        url='https://s3.ap-northeast-2.amazonaws.com/gimuwiki/file/c5c1e8ce-61d6-4998-8a58-11e712e67eac.jpg'
        name='고양이 사진 공유방'
      />
      <MemberList />
    </>
  )
}

export default MemberOrganisms
