import React, { useEffect, useState } from 'react'
import * as S from './style'
import MemberListItem from '../../atoms/Items/MemberListItem'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Ben } from '@/assets/svgs'
import LeaveGroupModal from '../../atoms/Modal/LeaveGroupModal'
import GroupCodeModal from '../../atoms/Modal/GroupCodeModal'

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
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const [isCodeModalVisible, setCodeModalVisible] = useState<Boolean>(false)

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
      <S.InviteText>
        <span
          onClick={() => {
            setCodeModalVisible(true)
          }}
        >
          멤버 초대하기
        </span>
      </S.InviteText>
      {memberList.map((member) => (
        <MemberListItem
          key={member.id}
          name={member.name}
          memberId={member.id}
          profileURL={member.profileUrl}
        />
      ))}
      <S.LeaveGroup
        onClick={() => {
          setModalVisible(true)
        }}
      >
        <Ben /> 그룹탈퇴하기
      </S.LeaveGroup>

      {isModalVisible && (
        <LeaveGroupModal onClose={() => setModalVisible(false)} />
      )}
      {isCodeModalVisible && (
        <GroupCodeModal onClose={() => setCodeModalVisible(false)} />
      )}
    </S.MemberListContainer>
  )
}

export default MemberList
