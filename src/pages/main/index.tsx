import MyClass from '@/components/Main/organisms/MyClass'
import RecommendClass from '@/components/Main/organisms/RecommendClass'
import MainLayout from './layout'
import Header from '@/components/Common/organisms/Header'
function main() {
  return (
    <MainLayout>
      <Header />
      <MyClass />
      <RecommendClass />
    </MainLayout>
  )
}

export default main
