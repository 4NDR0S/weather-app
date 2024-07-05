import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'

export default function Pressure() {
  const { api } = useContext(DataContext);

  const { main } = api

  return (
    <div className='w-[330px] h-[200px] bg-[#1E213A] text-center p-4'>
      <h3 className='font-medium text-[#E7E7EB]'>Air Pressure</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>{main.pressure} <span> </span> <span className=' text-[#E7E7EB] text-[36px] font-medium'>mb</span></h4>
      </div>

    </div>
  )
}
