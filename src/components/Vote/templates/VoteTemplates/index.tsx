import Header from '@/components/Common/organisms/Header'
import * as S from './style'
import { useEffect, useState } from 'react'
import API from '@/apis'
import { useRouter } from 'next/router'
import { VoteType } from '@/types/components/Vote/VoteType'
import VoteOrganisms from '../../organisms/VoteOrganisms'


const VoteTemplates = () => {
  const { id, voteId } = useRouter().query
  const [voteContent, setVoteContent] = useState<VoteType>({
    VoteId: 0,
    title: '',
    author: '',
    createdDate: '',
    voteOptions: [],
  })

  useEffect(() => {
    getVote()
  }, [id, voteId])

  const getVote = async () => {
    if (id != undefined && voteId != undefined) {
      try {
        const response = await API({
          url: `/group/${id}/vote/${voteId}`,
          method: 'get',
        })
        setVoteContent(response.data)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }
  }

  return (
    <>
      <Header />
      <S.PostTemplates>
        <VoteOrganisms {...voteContent} />
      </S.PostTemplates>
    </>
  )
}

export default VoteTemplates
