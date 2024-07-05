import React from 'react'

export default function Modal({ closeModal }) {
    return (
        <div className="font-raleway absolute bg-[#1E213A] h-[810px] mt-[-2px] left-0 right-0 mx-auto my-auto
            sm:w-[402px] sm:h-screen sm:mx-0 sm:my-0 z-20 sm:mt-[-16px] sm:pt-3">
            <div className='w-full text-right mb-5'>
                <button
                    className='p-2 text-gray-500 text-[25px] mr-3 font-bold'
                    onClick={closeModal}
                >✘</button></div>
            <div className='w-[366px] h-[48px] left-0 right-0 mx-auto
            flex justify-between gap-2'>
                <div className='w-[268px] border-[#E7E7EB] border-solid border-2 flex'>
                    <img src="/lupita.png" alt="lupa icon" className='h-full p-3' />
                    <input
                        type='text'
                        placeholder='search location'
                        className='h-full bg-[#1E213A] w-full'
                    />
                </div>
                <button className='bg-[#3C47E9] text-[#E7E7EB] w-[86px]
                '>Search
                </button>
            </div>

            <div className='block w-full p-8 mt-12'>
                <button className='block w-full text-left text-[#E7E7EB] text-[18px] py-4 mb-10'>London</button>
                <button className='block w-full text-left text-[#E7E7EB] text-[18px] py-4 mb-10'>Barcelona</button>
                <button className='block w-full text-left text-[#E7E7EB] text-[18px] py-4'>Long Beach</button>
            </div>
        </div>
    )
}
