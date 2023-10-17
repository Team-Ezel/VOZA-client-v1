import Header from '@/components/Common/organisms/Header'
import BoardHeader from '../../organisms/BoardHeader'
import * as S from './style'
import BoardInfo from '../../molecules/BoardInfo'
import { BoardInfoType } from '@/types/components/board/BoardInfoType'
import PostList from '../../molecules/PostList'

const BoardTemplates = () => {
  const dummyInfoData: BoardInfoType = {
    imageUrl:
      'https://i.namu.wiki/i/DcfUJJhhFFx3j4cuMYVG8x0otnaalLcaP6uTrQu_zKJJzJKpIH0_L5A9AOykJwWCyCmp2_pUmGRC7SgWetLg6A.webp',
    boardName: '빌린다 부처 팬클럽',
    boardDesc: '빌린다 부처 형님은 진짜 레전드시라고 ㅋㅋㅋㅋㅋ',
  }

  const dummyPostListData = {
    postlists: [
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '이아론',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '이아론',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '김민재',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '호날두',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '이명박',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '아담담',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '잉 기모링',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '이탈리아',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '맹구',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
      {
        title: '안녕하세요',
        boardType: '일반',
        author: '토트넘 핫스퍼 FC',
        createdDate: '2023-08-26 21:22:11',
        id: 1,
      },
    ],
  }

  const dummyVoteListData = {
    postlists: [
      {
        id: 1,
        title: '투표1',
        author: '작성자',
        createdDate: '2023-10-05',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '이아론',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '김민재',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '호날두',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '이명박',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '아담담',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '잉 기모링',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        boardType: '일반',
        author: '이탈리아',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '맹구',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '안녕하세요',
        author: '토트넘 핫스퍼 FC',
        createdDate: '2023-08-26 21:22:11',
      },
    ],
  }

  return (
    <S.BoardTemplates>
      <Header />
      <BoardHeader />
      <S.BoardContents>
        <BoardInfo {...dummyInfoData} />
        <S.BoardPostLists>
          <PostList props={dummyPostListData} listType={'게시글'} />
          <PostList props={dummyVoteListData} listType={'투표글'} />
        </S.BoardPostLists>
      </S.BoardContents>
    </S.BoardTemplates>
  )
}

export default BoardTemplates
