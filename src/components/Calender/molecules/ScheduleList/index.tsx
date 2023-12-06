import { ScheduleListDummy } from '@/assets/data/ScheduleListDummy'
import AddScheduleItem from '../../atoms/AddScheduleItem'
import ScheduleItem from '../../atoms/ScheduleItem'
import * as S from './style'
import {
  ScheduleItemListTypes,
  ScheduleListPropsType,
} from '@/types/components/Calender/ScheduleTypes'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ScheduleList({ day }: ScheduleListPropsType) {
  const router = useRouter()
  const { data, isLoading, fetch } = useFetch<ScheduleItemListTypes>({
    url: `/group/${router.query.id}/calender?searchDate=${day}`,
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [day])

  return (
    <S.ScheduleListWrapper>
      <AddScheduleItem />
      {!isLoading
        ? data?.dateList
            .filter((i) => i.startDate <= day && i.endDate >= day)
            .map((i) => (
              <ScheduleItem
                id={i.id}
                title={i.title}
                startDate={i.startDate}
                endDate={i.endDate}
                key={i.id}
              />
            ))
        : null}
    </S.ScheduleListWrapper>
  )
}
