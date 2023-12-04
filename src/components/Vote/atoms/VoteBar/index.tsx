import React from 'react'
import * as S from './style'
import { Checked } from '@/assets/svgs'

interface VoteBarProps {
  content: string
  count: number
  id: number
  selected: boolean
  onSelect: (id: number) => void
  totalVoteCount: number
}

const VoteBar: React.FC<VoteBarProps> = ({
  content,
  count,
  id,
  selected,
  onSelect,
  totalVoteCount,
}) => {
  const ratio =
    totalVoteCount > 0
      ? (selected ? count + 1 : count) /
        (selected ? totalVoteCount + 1 : totalVoteCount)
      : 0

  return (
    <S.VoteBar onClick={() => onSelect(id)}>
      <S.Detail>
        <span>{content}</span> &nbsp;
        {selected && <Checked />} &nbsp;&nbsp; {count}
      </S.Detail>
      <S.VoteColorBar selected={selected} ratio={ratio}></S.VoteColorBar>
    </S.VoteBar>
  )
}

export default VoteBar
