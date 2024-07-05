import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'

export default function Humidity() {
    const { api } = useContext(DataContext);

    const { main } = api

    return (
        <div className='w-[330px] h-[200px] bg-[#1E213A] text-center p-4
        sm:w-[360px]'>
            <h3 className='font-medium text-[#E7E7EB]'>Humidity</h3>
            <div>
                <h4 className='text-[64px] text-[#E7E7EB] font-bold'>{main.humidity}<span className=' text-[#E7E7EB] text-[36px] font-medium'>%</span></h4>
            </div>

            <div className='flex justify-between mb-1'>
                <span className='text-[#A09FB1] text-[12px]'>0</span>
                <span className='text-[#A09FB1] text-[12px]'>50</span>
                <span className='text-[#A09FB1] text-[12px]'>100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#FFEC65] h-2.5 rounded-full" style={{ width: `${main.humidity}%` }}></div>
            </div>

        </div>
    )
}
