import { MainPageBarItemPropsType } from '@/types/components/Main/MainPageBarTypes'
import * as S from './style'
import { useRouter } from 'next/router'
import Link from 'next/link'

function MainPageBarItem({ name, value }: MainPageBarItemPropsType) {
  const router = useRouter()
  const Color:string = router.asPath===value?"#000":"#999";
  const display:boolean = router.asPath===value
  console.log(Color,display,value)
  return (
    <S.MainPageBarItemWrapper toColor={Color}>
      <Link href={value}>{name}</Link>
      <S.Line toDisplay={display} ></S.Line>
    </S.MainPageBarItemWrapper>
  )
}

export default MainPageBarItem
