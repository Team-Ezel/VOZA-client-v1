import styled from '@emotion/styled'

interface CategoryItemWrapperPropsType {
    toSelect:boolean
    onClick:()=>void
}

export const CategoryWrapper = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`
export const CategoryListWrapper = styled.div`
  margin-top: 7%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem 0.1rem;
  width: 100%;
  flex-wrap: wrap;
  height: 62%;
`
export const CategoryItemWrapper = styled.div<CategoryItemWrapperPropsType>`
  cursor: pointer;
  background-color: ${(props)=>props.toSelect?"#656B80":"#F2F2F4"};
  color: ${(props)=>props.toSelect?"#F7F8FA":"#000000"};
  width: 49%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
`
