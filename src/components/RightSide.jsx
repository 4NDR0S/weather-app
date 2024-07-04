import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import ForecastDays from './ForecastDays'
import ButtonChangeTemp from './ButtonChangeTemp';
import HighlightsBox from './HighlightsBox';

export default function RightSide() {

  return (
    <div className='bg-[#100E1D] w-full p-8 font-raleway
    left-0 right-0 mx-auto 
    flex flex-wrap justify-center
    sm:w-full sm:px-[14%]'>
      <ButtonChangeTemp />
      <div className=''>
        <ForecastDays>
        </ForecastDays>
      </div>

      <HighlightsBox/>
    </div>
  )
}
