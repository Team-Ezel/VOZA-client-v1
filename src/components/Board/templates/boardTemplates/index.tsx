import Header from '@/components/Common/organisms/Header'
import BoardHeader from '../../organisms/BoardHeader'
import * as S from './style'
import BoardInfo from '../../molecules/BoardInfo'
import { BoardInfoType } from '@/types/components/board/BoardInfoType'
import PostList from '../../molecules/PostList'
import { useEffect, useState } from 'react'
import WriteModal from '../../atoms/modal/WriteModal'
import { useRecoilValue } from 'recoil'
import { boardModalAtom } from '@/atoms/atoms'
import { useRouter } from 'next/router'
import API from '@/apis'
import { BoardPostType } from '@/types/components/board/BoardPostType'
import { BoardVoteType } from '@/types/components/board/BoardVoteType'

const BoardTemplates = () => {
  const modalState = useRecoilValue(boardModalAtom)
  const params = useRouter().query.id

  const [boardPostData, setBoardPostData] = useState<Object>({ postlists: [] })
  const [boardVoteData, setBoardVoteData] = useState<Object>({ postlists: [] })
  const [groupData, setGroupData] = useState<BoardInfoType>({
    imageUrl: '',
    boardName: '',
    boardDesc: '',
  })

  const getGroupData = async () => {
    const _groupResponse: BoardInfoType = await API({
      url: `/group/myGroups`,
      method: 'get',
    })
    setGroupData(_groupResponse)
  }

  const getPostData = async () => {
    const _postResponse: BoardPostType[] = await API({
      url: `/group/${params}/vote`,
      method: 'get',
    })
    setPostResList(_postResponse)
  }

  const getVoteData = async () => {
    const _voteResponse: BoardVoteType[] = await API({
      url: `/group/${params}/board`,
      method: 'get',
    })
    setVoteResList(_voteResponse)
  }

  const setPostResList = (res: BoardPostType[] | BoardVoteType[]) => {
    res.map((data: BoardPostType | BoardVoteType) => {
      setBoardPostData((prevState: BoardPostType[] | BoardVoteType[]) => {
        return {
          postlists: [...prevState, data],
        }
      })
    })
  }

  const setVoteResList = (res: BoardVoteType[]) => {
    res.map((data: BoardVoteType) => {
      setBoardVoteData((prevState: BoardVoteType[]) => {
        return {
          postlists: [...prevState, data],
        }
      })
    })
  }

  // useEffect(() => {
  //   if (params != undefined) {
  //     getGroupData()
  //     getPostData()
  //     getVoteData()
  //   }
  // }, [params])

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
        createdDate: '2023-08-26 21:22',
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
        title: '아자형님 VS ',
        author: '작성자',
        createdDate: '2023-10-05',
      },
      {
        id: 1,
        title: '이아론 VS 이아론',
        author: '이아론',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '쉬바나 VS 리븐',
        author: '김민재',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '롤 VS 피파',
        author: '호날두',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '우리엄마손맛 VS 백종원손맛',
        author: '이명박',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '대기업 VS 공기업',
        author: '아담담',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '민욱 VS 수용',
        author: '잉 기모링',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '진순 VS 진매',
        author: '이탈리아',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '급식맨 VS 입시맨',
        author: '맹구',
        createdDate: '2023-08-26 21:22:11',
      },
      {
        id: 1,
        title: '호날두 VS 음바페',
        author: '토트넘 핫스퍼 FC',
        createdDate: '2023-08-26 21:22:11',
      },
    ],
  }

  return (
    <>
      {modalState === true ? <WriteModal /> : ''}
      <S.BoardTemplates>
        <Header />
        <BoardHeader />
        <S.BoardContents>
          <BoardInfo /*{...groupData}*/ {...dummyInfoData} />
          <S.BoardPostLists>
            {/* <PostList props={boardPostData} listType={'게시글'} />
            <PostList props={boardVoteData} listType={'투표글'} /> */}
            <PostList props={dummyPostListData} listType={'게시글'} />
            <PostList props={dummyVoteListData} listType={'투표글'} />
          </S.BoardPostLists>
        </S.BoardContents>
      </S.BoardTemplates>
    </>
  )
}

export default BoardTemplates
