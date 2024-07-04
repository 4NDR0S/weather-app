import React from 'react'
import TodayBox from './components/TodayBox'
import RightSide from './components/RightSide'

export default function App() {
  return (
    <div className='sm:flex'>
    <TodayBox/>
    <RightSide/>
    </div>
  )
}
