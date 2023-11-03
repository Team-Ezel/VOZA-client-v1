import { useEffect } from 'react'
import * as S from './style'
import { MyClassListPropsTypes } from '@/types/components/Main/MyClassType'
import MyClassItem from '../../atoms/Item/MyClassItem'
import NewClassItem from '../../atoms/Item/NewClass'
import { MyClassData } from '@/types/components/Main/MyClassType'
import useFetch from '@/hooks/useFetch'

function MyClassList() {
  const { fetch, isLoading, data } = useFetch<MyClassData>({
    url: '/group/myGroups',
    method: 'GET',
  })

  useEffect(() => {
    fetch()
    console.log(data)
  }, [fetch])

  return (
    <S.MyClassList>
      <NewClassItem />
      {!isLoading &&
        data &&
        data.groupList.map((item) => (
          <MyClassItem
            id={item.groupId}
            title={item.groupName}
            leader={item.leaderName}
            member={item.members}
            thumbnail={item.url}
            key={item.groupId}
          />
        ))}
    </S.MyClassList>
  )
}

export default MyClassList
