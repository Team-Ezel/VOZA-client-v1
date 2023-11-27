import Header from '@/components/Common/organisms/Header'
import * as S from '../../../../components/CreateVote/templates/style'
import React from 'react'
import CreateVoteorganisms from '@/components/CreateVote/organisms/CreateVoteorganisms'

const index = () => {
  return (
    <>
      <Header />
      <S.CreateVoteTemplates>
        <CreateVoteorganisms />
      </S.CreateVoteTemplates>
    </>
  )
}

export default index
