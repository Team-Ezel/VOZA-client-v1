import { useState } from 'react';
import { RecommendClassListType } from '@/types/components/Main/RecommendClassType';
import RecommendClassList from '../../molecules/RecommendClassList';
import * as S from './style';

const dummyRecommendClassItemList = {
    data:[
        {
            id:1,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:2,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:3,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:4,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:5,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:6,
            title:"광주 브롤스타즈 모임",
            introduction:"강해린만을 생각하는 덕질방 입니다.정기 공유일은 매월 첫쨋주 월요일입니다.",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:7,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:8,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:9,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },{
            id:10,
            title:"광주 브롤스타즈 모임",
            introduction:"매주 4회 이상 팀전 돌릴분 찾습니다.신입환영♥",
            thumbnail:"https://i.namu.wiki/i/AGAdINW052kmp0X8qmI5r8DXmjOl0YngPbuREKd-rnvhsU8HUeWRC5hnaLE3Cr3nWsXKjLViRDStKKNug_WFNQ.webp"
        },
    ]
}

function RecommendClass (){
    const [data,setData] = useState(dummyRecommendClassItemList.data);
    return(
        <S.RecommendClassWrapper>
            <S.titleWrapper>
                추천모임
            </S.titleWrapper>
            <RecommendClassList  RecommendClassList={data} />
        </S.RecommendClassWrapper>
    )
}
export default RecommendClass;