import GroupInfoItem from '@/components/Common/atoms/Group/Item/GroupInfoItem'
import React, { useEffect, useState } from 'react'
import MemberList from '../../molecules/MemberList'
import { useRouter } from 'next/router'
import axios from 'axios'

interface Group {
  url: string
  groupName: string
}

const MemberOrganisms: React.FC = () => {
  const baseurl: string | undefined = process.env.NEXT_PUBLIC_BASEURL
  const router = useRouter()
  const { id } = router.query
  const [group, setGroup] = useState<Group | null>(null)

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('kakao-accessToken')

      if (!accessToken) {
        console.error('Access Token이 없습니다.')
        return
      }

      const response = await axios.get<Group>(`${baseurl}/group/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setGroup(response.data)
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
    <>
      {group && <GroupInfoItem url={group.url} name={group.groupName} />}
      <MemberList />
    </>
  )
}

export default MemberOrganisms
