import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import ForecastDays from './ForecastDays'
import ButtonChangeTemp from './ButtonChangeTemp';

export default function RightSide() {
    const { api, loading, error, changeUnit, unit } = useContext(DataContext);

  return (
    <div className='bg-[#100E1D] w-[400px] sm:w-full sm:l-[400px] mt-0'>
        <ButtonChangeTemp/>
        <ForecastDays>

        </ForecastDays>
    </div>
  )
}
