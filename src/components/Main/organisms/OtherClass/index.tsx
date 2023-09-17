import * as S from './style'
import { useState } from 'react'
import { OtherClassItemTypes } from '@/types/components/Main/OtherClassTypes'
import OtherClassList from '../../molecules/OtherClassList'
import OtherClassFilter from '../../molecules/OtherClassFilter'
const dummyOhterClassList = {
  data: [
    {
      id: 1,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 2,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 3,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 4,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 5,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 6,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 7,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 8,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 9,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임',
    },
    {
      id: 10,
      title: '광주 브롤스타즈 모임',
      introduction: '매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥',
      thumbnail:
        'https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp',
      tags: '취미 친목/모임 취미 취미 취미 취미',
    },
  ],
}

function OtherClass() {
  const [res, setRes] = useState(dummyOhterClassList.data)
  return (
    <S.OtherClassWrapper>
      <S.titleWrapper>
        <span>광주</span> 소모임
      </S.titleWrapper>
      <OtherClassFilter/>
      <OtherClassList
      otherClassList={res}
      />
    </S.OtherClassWrapper>
  )
}

export default OtherClass
