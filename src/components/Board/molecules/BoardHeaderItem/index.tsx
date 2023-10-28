import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import { useEffect } from 'react'

interface BoardHeaderItem {
  name: string
  value: string
}

const BoardHeaderItem = ({ name, value }: BoardHeaderItem) => {
  const path = useRouter().asPath
  const color: string = value === path ? '#3355cd' : '#000'

  useEffect(() => {
    console.log(path, color)
  })

  return (
    <S.BoardHeaderItem textColor={color}>
      <Link href={value}>{name}</Link>
    </S.BoardHeaderItem>
  )
}
export default BoardHeaderItem
