import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import ForecastDays from './ForecastDays'
import ButtonChangeTemp from './ButtonChangeTemp';
import HighlightsBox from './HighlightsBox';
import Footer from './Footer';

export default function RightSide() {

  return (
    <div className='bg-[#100E1D] w-full p-8 font-raleway
    left-0 right-0 mx-auto'>
      <ButtonChangeTemp />

      <div className=' left-0 right-0 mx-auto
      flex flex-wrap justify-center
      sm:w-full sm:px-[10%]'>

        <div className='left-0 right-0 mx-auto py-6
         sm:max-w-[780px]'>
          <ForecastDays>
          </ForecastDays>
        </div>

        <div className='left-0 right-0 mx-auto sm:max-w-[780px]'>
          <HighlightsBox />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
