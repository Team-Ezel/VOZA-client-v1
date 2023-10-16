import Header from '@/components/Common/organisms/Header'
import WriteBox from '@/components/Write/organisms/WriteBox'
import { CalenderTemplates } from "@/components/Calender/templates/CalenderTemplates/style"
import CalenderBox from '@/components/Calender/organisms/CalenderBox'
import Schedule from '@/components/Calender/organisms/Schedule'
export default function test() {
  return (
    <>
      <Header />
      <CalenderTemplates>
        <CalenderBox />
        <Schedule />
      </CalenderTemplates>
    </>
  )
}
