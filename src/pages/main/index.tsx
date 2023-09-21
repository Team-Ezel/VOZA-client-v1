import MyClass from '@/components/Main/organisms/MyClass'
import RecommendClass from '@/components/Main/organisms/RecommendClass'
import MainLayout from './layout'
import Header from '@/components/Common/organisms/Header'
import NewClassModal from '@/components/Main/organisms/NewClassModal'
function main() {
  return (
    <MainLayout>
      <NewClassModal/>
      <Header />
      <MyClass />
      <RecommendClass />
    </MainLayout>
  )
}

export default main
