import Header from '@/components/Common/organisms/Header'
import { CalenderTemplates } from '@/components/Calender/templates/CalenderTemplates/style'
import CalenderBox from '@/components/Calender/organisms/CalenderBox'
import moment from 'moment'
import { useState } from 'react'
import Schedule from '@/components/Calender/organisms/Schedule'
import CalenderModal from '@/components/Calender/organisms/CalenderModal'
function CalenderPage() {
  const [selectDay, setSelectDay] = useState(() => moment())
  console.log(selectDay)
  return (
    <>
      <Header />
      <CalenderTemplates>
        <CalenderModal />
        <CalenderBox day={selectDay} setDay={setSelectDay} />
        <Schedule day={selectDay} setDay={setSelectDay} />
      </CalenderTemplates>
    </>
  )
}

export default CalenderPage
