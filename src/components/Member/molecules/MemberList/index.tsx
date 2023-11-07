import React, { useEffect, useState } from 'react'
import * as S from './style'
import MemberListItem from '../../atoms/Items/MemberListItem'
import axios from 'axios'
import { useRouter } from 'next/router'

interface Member {
  name: string
  id: number
  profileUrl: string
}

const MemberList: React.FC = () => {
  const baseurl: string | undefined = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const { id } = router.query
  const [memberList, setMemberList] = useState<Member[]>([])

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!accessToken) {
        console.error('Access Token이 없습니다.')
        return
      }

      const response = await axios.get<{ memberResponses: Member[] }>(
        `${baseurl}/group/${id}/member`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      setMemberList(response.data.memberResponses)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id])

  return (
    <S.MemberListContainer>
      <S.Title>멤버</S.Title>
      {memberList.map((member) => (
        <MemberListItem
          key={member.id}
          name={member.name}
          memberId={member.id}
          profileURL={member.profileUrl}
        />
      ))}
    </S.MemberListContainer>
  )
}

export default MemberList
