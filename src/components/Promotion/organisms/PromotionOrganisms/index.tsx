import LoginSvg from '@/assets/svgs/LoginSvg'
import LoginBtn from '../../atoms/LoginBtn'
import DocsPart from '../../molecules/DocsPart'
import * as S from './style'

const PromotionOrganisms = () => {
  return (
    <>
      <S.PromotionOrganisms>
        <DocsPart />
        <LoginBtn />
      </S.PromotionOrganisms>
      <LoginSvg />
    </>
  )
}

export default PromotionOrganisms
