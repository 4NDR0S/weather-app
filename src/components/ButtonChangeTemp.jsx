import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'

export default function ButtonChangeTemp() {
  const { changeUnit, unit } = useContext(DataContext)

  return (
    <div className='flex justify-center space-x-4 py-4
    left-0 right-0 mx-auto
    sm:justify-end sm:max-w-[780px] sm:pr-5 '>
      <div className={`rounded-full h-10 w-10 flex items-center justify-center ${unit === 'metric' ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#6E707A] text-[#E7E7EB]'}`}>
        <button
          onClick={() => changeUnit('metric')}
          disabled={unit === 'metric'}
          className="text-[18px] font-bold" // Puedes ajustar el tamaño del texto según tus necesidades
        >
          °C
        </button>
      </div>

      <div className={`rounded-full h-10 w-10 flex items-center justify-center ${unit === 'imperial' ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#6E707A] text-[#E7E7EB]'}`}>
        <button
          onClick={() => changeUnit('imperial')}
          disabled={unit === 'imperial'}
          className='text-[18px] font-bold'
        >
          °F
        </button>
      </div>

    </div>
  )
}
