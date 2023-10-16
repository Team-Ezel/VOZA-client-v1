import React from 'react'
import * as S from './style'
import { Category } from '@/types/components/groupcategories/category'
import { useRouter } from 'next/router'

const categories: Category[] = [
  {
    name: 'main',
    text: '게시글',
  },
  {
    name: 'schedule',
    text: '일정',
  },
  {
    name: 'member',
    text: '맴버',
  },
]

const GroupCategories = () => {
  const router = useRouter()

  return (
    <S.CategoriesBlock>
      {categories.map((c) => (
        <S.Category
          key={c.name}
          href={c.name === 'main' ? '/group/main' : `/group/${c.name}`}
          style={{
            color:
              router.pathname === `/group/${c.name}` ? '#3355cd' : 'inherit',
          }}
        >
          {c.text}
        </S.Category>
      ))}
    </S.CategoriesBlock>
  )
}

export default GroupCategories
