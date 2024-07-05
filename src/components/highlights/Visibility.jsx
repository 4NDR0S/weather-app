import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'

export default function Visibility() {
    const { api } = useContext(DataContext);

    const { visibility } = api

    //la api nos da el valor de la visibilidad en metros
    const visibilityInMiles = (visibility / 1609.34).toFixed(1).replace('.', ',');
  return (
    <div className='w-[330px] h-[200px] bg-[#1E213A] text-center p-4
    sm:w-[360px]'>
      <h3 className='font-medium text-[#E7E7EB]'>Visibility</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>{visibilityInMiles} <span> </span> <span className=' text-[#E7E7EB] text-[36px] font-medium'>miles</span></h4>
      </div>

    </div>
  )
}
