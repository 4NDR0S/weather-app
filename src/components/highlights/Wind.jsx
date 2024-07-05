import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'


export default function Wind() {
  const { api, unit } = useContext(DataContext);

  const { wind } = api

  const windSpeed = Math.floor(wind.speed)
  
  return (
    <div className='w-[330px] h-[200px] bg-[#1E213A] text-center p-4'>
      <h3 className='font-medium text-[#E7E7EB]'>Wind Status</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>{windSpeed}<span className=' text-[#E7E7EB] text-[36px] font-medium'>{unit === 'imperial' ? 'mph' : 'm/s'}</span></h4>
      </div>
      <span>{wind.deg}</span>

    </div>
  )
}
