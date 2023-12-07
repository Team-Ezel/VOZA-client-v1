import React, { useState, useEffect } from 'react'
import * as S from './style'
import { useRouter } from 'next/router'
import API from '@/apis'
import { VoteType } from '@/types/components/Vote/VoteType'
import VoteInfo from '../../molecules/VoteInfo'
import VoteBar from '../../atoms/VoteBar'
import Button from '@/components/Common/atoms/Button/Button'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VoteOrganisms = (props: VoteType) => {
  const router = useRouter()
  const [selectedBarId, setSelectedBarId] = useState<number | null>(null)
  const [totalVoteCount, setTotalVoteCount] = useState<number>(0)

  const error = () => toast.error('아무것도 선택되지 않았습니다.')
  const voteError = () => toast.error('이미 투표를 진행한적이 있습니다')

  useEffect(() => {
    // voteOptions의 count 합 계산
    const totalCount = props.voteOptions.reduce(
      (acc, option) => acc + option.count,
      0,
    )
    setTotalVoteCount(totalCount)
  }, [props.voteOptions])

  const delOnClick = () => {
    const confState = confirm('정말 삭제하시겠습니까?')
    if (confState === true) {
      API({
        method: 'DELETE',
        url: `/group/${router.query.id}/vote/${router.query.voteId}`,
      })
      router.replace(`/group/${router.query.id}`)
    }
  }

  const vote = async () => {
    if (selectedBarId == null) {
      error()
      return
    }

    const confState = confirm('투표하시겠습니까?')
    if (confState === true) {
      try {
        const response = await API({
          method: 'PATCH',
          url: `/group/${router.query.id}/vote/${router.query.voteId}/${selectedBarId}`,
        })

        if (response.status === 200) {
          router.reload()
        }
      } catch (error) {
        voteError()
      }
    }
  }
  const handleBarSelect = (id: number) => {
    setSelectedBarId(id === selectedBarId ? null : id)
  }

  return (
    <S.PostOrganisms>
      <ToastContainer
        limit={1}
      />
      <VoteInfo {...props} />
      <hr />
      <S.EditTab>
        <span onClick={delOnClick}>삭제</span>
      </S.EditTab>
      <S.PostContent>
        {props?.voteOptions.map((item) => (
          <VoteBar
            key={item.id}
            content={item.option}
            count={item.count}
            id={item.id}
            selected={item.id === selectedBarId}
            onSelect={handleBarSelect}
            totalVoteCount={
              item.id !== selectedBarId && selectedBarId === null
                ? totalVoteCount
                : totalVoteCount + 1
            }
          />
        ))}
        <Button
          width='28.75rem'
          height='3.752rem'
          borderRadius='0.3125rem'
          background='#3355CD'
          color='white'
          fontSize='1.125rem'
          onClick={vote}
        >
          투표하기
        </Button>
      </S.PostContent>
    </S.PostOrganisms>
  )
}

export default VoteOrganisms
