import Button from '@/components/Common/atoms/Button/Button'
import { useRecoilState } from 'recoil'
import { newClassModal } from '@/atoms/atoms'
import * as S from './style'
import { NewClassModalCategoryListData } from '@/assets/data/NewClassModalCategoryListData'
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
import { useState } from 'react'
import { isNotNull } from '@/utils/isNotNull'

function Category() {
  const [NewClassModalState, setNewClassModalState] =
    useRecoilState<NewClassModalStateType>(newClassModal)
  const [category, setCategory] = useState<string[]>([])
  const categorySelect = isNotNull(category[0])

  return (
    <S.CategoryWrapper>
      <S.CategoryListWrapper>
        {NewClassModalCategoryListData.map((i) => (
          <S.CategoryItemWrapper
            toSelect={category.filter((item) => item === i.value).length > 0}
            onClick={() => {
              if (category.filter((item) => item === i.value).length === 0) {
                setCategory([...category, i.value])
              } else {
                setCategory([...category.filter((item) => item !== i.value)])
              }
            }}
          >
            {i.name}
          </S.CategoryItemWrapper>
        ))}
      </S.CategoryListWrapper>
      {/* <NewClassModalButton children="다음" backgroundColor="#F2F2F4" color="#FFFFFF"/> */}
      <Button
        children='다음'
        width='100%'
        height='3rem'
        borderRadius='5px'
        border='0'
        background={categorySelect ? '#3355CD' : '#F2F2F4'}
        color='#fff'
        fontSize='18px'
        onClick={() => {
          if (categorySelect) {
            setNewClassModalState({ ...NewClassModalState, category: category })
            setNewClassModalState({ ...NewClassModalState, page: 'name' })
          }
        }}
      />
    </S.CategoryWrapper>
  )
}

export default Category
