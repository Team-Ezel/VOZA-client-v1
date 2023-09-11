import RecommendClassList from '../../molecules/RecommendClassList';
import * as S from './style';



function RecommendClass (){

    return(
        <S.RecommendClassWrapper>
            <S.titleWrapper>
                추천모임
            </S.titleWrapper>
            <RecommendClassList />
        </S.RecommendClassWrapper>
    )
}