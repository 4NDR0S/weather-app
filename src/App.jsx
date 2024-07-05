import React from 'react'
import TodayBox from './components/TodayBox'
import RightSide from './components/RightSide'

export default function App() {
  return (
    <div className=' w-full h-full
    sm:flex sm:h-full'>
    <TodayBox/>
    <RightSide/>
    </div>
  )
}
