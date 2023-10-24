import Button from '@/components/Common/atoms/Button/Button'
import { useRecoilState } from 'recoil'
import { newClassModal, newClassState } from '@/atoms/atoms'
import * as S from './style'
import { NewClassModalCategoryListData } from '@/assets/data/NewClassModalCategoryListData'
import { NewClassModalStateType } from '@/types/components/common/NewClassModal'
import { useState, useEffect } from 'react'
import { isNotNull } from '@/utils/isNotNull'

function Category() {
  const [NewClassModalState, setNewClassModalState] = useRecoilState<NewClassModalStateType>(newClassModal)
  const [newclassState, setNewclassState] = useRecoilState(newClassState);
  const [category, setCategory] = useState<string[]>([]);
  const categorySelect = isNotNull(category[0]);

  useEffect(() => {
    setNewclassState({
      groupName: "",
      introduceGroup: "",
      region: "",
      tags: []
    })
  }, [])

  return (
    <S.CategoryWrapper>
      <S.CategoryListWrapper>
        {NewClassModalCategoryListData.map((i) => (
          <S.CategoryItemWrapper
            toSelect={category.filter(item => item === i.value).length > 0}
            onClick={() => {
              if (category.filter(item => item === i.value).length === 0) {
                setCategory([...category, i.value]);
              }
              else {
                setCategory([...category.filter(item => item !== i.value)]);
              }
            }}
            key={i.value}
          >
            {i.name}
          </S.CategoryItemWrapper>
        ))}
      </S.CategoryListWrapper>
      <Button
        width='100%'
        height='3rem'
        borderRadius='5px'
        border='0'
        background={categorySelect ? "#3355CD" : '#F2F2F4'}
        color='#fff'
        fontSize='18px'
        onClick={() => {
          if (categorySelect) {
            setNewclassState({ ...newclassState, tags: category })
            setNewClassModalState({ ...NewClassModalState, page: "name" })
          }
        }}

      >다음</Button>
    </S.CategoryWrapper>
  )
}

export default Category
