import { useState } from "react";
import MyClassList from '../../molecules/MyClassList'
import * as S from './style'

const dummyListItem = {
  data: {
    groupList: [
      {
        id: 1,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      },
      {
        id: 2,
        title: '그룹이름2',
        leader: '리더이름2',
        member: 7,
        thumbnail: '',
      }, {
        id: 3,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      }, {
        id: 4,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      }, {
        id: 5,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      }, {
        id: 6,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      }, {
        id: 7,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      }, {
        id: 8,
        title: '그룹이름',
        leader: '리더이름',
        member: 5,
        thumbnail: '',
      },
    ],
  },
}

function MyClass() {
    const [datas,setDatas] = useState(dummyListItem.data.groupList);
  return (
    <S.MyClassWrapper>
      <MyClassList 
      datas={datas}
      />
    </S.MyClassWrapper>
  )
}

export default MyClass
