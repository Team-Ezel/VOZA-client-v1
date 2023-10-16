import Header from '@/components/Common/organisms/Header'
import React from 'react'
import * as S from '../../../components/Member/templates/GroupMemberTemplates/style'
import GroupCategories from '@/components/Common/organisms/GroupCategories'
import MemberOrganisms from '@/components/Member/organisms/Memberorganisms'


function Member() {

  return (
    <>
      <Header />
      <GroupCategories />
      <S.GroupMemberTemplates>
        <>
          <MemberOrganisms />
        </>
      </S.GroupMemberTemplates>
    </>
  )
}

export default Member
