import OutherClass from '@/components/Main/organisms/OtherClass'
import MainLayout from '../layout'
import Header from '@/components/Common/organisms/Header'

function OuterClass() {
  return (
    <>
      <Header />
      <MainLayout>
        <OutherClass />
      </MainLayout>
    </>
  )
}
export default OuterClass
