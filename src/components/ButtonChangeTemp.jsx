import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'

export default function ButtonChangeTemp() {
    const { api, loading, error, changeUnit, unit } = useContext(DataContext)

  return (
    <div className='flex justify-center space-x-4'>
                <button
                        onClick={() => changeUnit('metric')}
                        className={`rounded-full px-2 py-1 ${unit === 'metric' ? 'bg-white text-[#110E3C]' : 'bg-[#6E707A] text-white'}`}
                        disabled={unit === 'metric'}
                    >
                        °C
                    </button>
                    <button
                        onClick={() => changeUnit('imperial')}
                        className={`rounded-full px-2 py-1 ${unit === 'imperial' ? 'bg-white text-[#110E3C]' : 'bg-[#6E707A] text-white'}`}
                        disabled={unit === 'imperial'}
                    >
                        °F
                    </button>
    </div>
  )
}
