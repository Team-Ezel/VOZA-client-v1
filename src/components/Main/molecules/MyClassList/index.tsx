import { useState } from 'react';
import * as S from './style';
import { MyClassListPropsTypes } from '@/types/components/Main/MyClassType';
import MyClassItem from '../../atoms/Item/MyClassItem';
import NewClassItem from '../../atoms/Item/NewClass';
function MyClassList ({datas}:MyClassListPropsTypes){
    const [res,setRes] = useState(datas);
    console.log(res)
    return(
        <S.MyClassList>
            <NewClassItem/>
            {res.map((item)=>(
                <MyClassItem
                id={item.id}
                title={item.title}
                leader={item.leader}
                member={item.member}
                thumbnail={item.thumbnail}
                key={item.id}
                />
            ))}
        </S.MyClassList>
    )
}

export default MyClassList;