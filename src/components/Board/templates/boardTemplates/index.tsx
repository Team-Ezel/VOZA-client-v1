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

interface BoardObjectType {
  postlists: BoardPostType[]
}

const BoardTemplates = () => {
  const modalState = useRecoilValue(boardModalAtom)
  const params = useRouter().query.id

  const [boardPostData, setBoardPostData] = useState<BoardObjectType>({
    postlists: [],
  })
  const [boardVoteData, setBoardVoteData] = useState<Object>({ postlists: [] })
  const [groupData, setGroupData] = useState<BoardInfoType>({
    imageUrl: '',
    boardName: '',
    boardDesc: '',
  })

  const getGroupData = async () => {
    const _groupResponse: any = await API({
      url: `/group/detail/${params}`,
      method: 'get',
    })
    setGroupData({
      imageUrl: _groupResponse.data.url,
      boardDesc: _groupResponse.data.introduce,
      boardName: _groupResponse.data.groupName,
    })
    console.log(_groupResponse)
  }

  const getPostData = async () => {
    const _postResponse: BoardPostType[] = await API({
      url: `/group/${params}/board`,
      method: 'get',
    })
    setPostResList(_postResponse)
    console.log(_postResponse)
  }

  const getVoteData = async () => {
    const _voteResponse: BoardVoteType[] = await API({
      url: `/group/${params}/vote`,
      method: 'get',
    })
    setVoteResList(_voteResponse)
  }

  const setPostResList = (res: any) => {
    const updatedPostData = res.data.boardList.map((data: BoardPostType) => {
      return data
    })

    setBoardPostData((prevData: BoardObjectType) => {
      return {
        postlists: [...prevData.postlists, ...updatedPostData],
      }
    })
  }

  const setVoteResList = (res: any) => {
    const updatedVoteData = res.data.voteList.map((data: BoardVoteType) => {
      return data
    })

    setBoardVoteData((prevData: BoardObjectType) => {
      return {
        postlists: [...prevData.postlists, ...updatedVoteData],
      }
    })
  }

  useEffect(() => {
    if (params != undefined) {
      getGroupData()
      getPostData()
      getVoteData()
    }
  }, [params])

  return (
    <>
      {modalState === true ? <WriteModal /> : ''}
      <S.BoardTemplates>
        <Header />
        <BoardHeader />
        <S.BoardContents>
          <BoardInfo {...groupData} />
          <S.BoardPostLists>
            <PostList props={boardPostData} listType={'게시글'} />
            <PostList props={boardVoteData} listType={'투표글'} />
          </S.BoardPostLists>
        </S.BoardContents>
      </S.BoardTemplates>
    </>
  )
}

export default BoardTemplates
