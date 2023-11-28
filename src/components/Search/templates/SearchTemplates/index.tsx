import { BoardPostType } from '@/types/components/board/BoardPostType'
import SearchOrganisms from '../../organisms/SearchOrganisms/index'
import * as S from './style'
import BoardPostItem from '@/components/Board/atoms/item/BoardPostItem'
import SearchPostlists from '../../molecules/SearchPostlists'

const SearchTemplates = () => {
  const DummyPostData: BoardPostType[] = [
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
    {
      id: 1,
      title: '욱자형이 너무 좋아요',
      boardType: '일반',
      author: '수자',
      createdDate: '2023-08-26 21:22',
    },
  ]

  return (
    <S.SearchTemplates>
      <SearchOrganisms />
      <hr />
      <SearchPostlists DummyPostData={DummyPostData} />
    </S.SearchTemplates>
  )
}

export default SearchTemplates
