import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import CurrentDay from './CurrentDay';

const weatherBackGround = '/Cloud-background.png'


export default function TodayBox() {
    const { api, loading, error, unit } = useContext(DataContext);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const { main, weather, name } = api;

    if (!weather || weather.length === 0) {
        return <p>Sin datos de clima disponibles</p>;
    }

    // console.log(weather, name);

    // main.temp en un variable sin decimales
    const tempEntero = Math.floor(main.temp);

    // descripccion del clima
    const descriptionWeather = weather[0].main


    return (
        <div className="font-raleway bg-[#1E213A] max-w-[640px] pb-6 h-[810px]
        sm:w-[500px] sm:h-screen">
            <div className='p-4 flex justify-between'>
                <div className='bg-[#6E707A] w-[160px] text-center'>
                    <button className='text-[#E7E7EB] py-2'>Search for places</button>
                </div>
                <div className='bg-[#6E707A] h-[40px] rounded-full w-[40px]'>
                    <button>
                        <img src="/my_location.png" alt="my location icon" className='left-0 right-0 mx-auto p-2' />
                    </button>
                </div>
            </div>
            <div className=''>
                <div className='w-full'>
                    <img src={`${weather[0].icon.slice(0, 2)}.png`} alt={`${weather[0].description}`}
                        className='left-0 right-0 mx-auto relative z-1000 w-[180px] pt-[90px] mt-0' />
                </div>

                <div className='h-[370px] opacity-[10%] bg-center z-1 mt-[-280px]' style={{ backgroundImage: `url(${weatherBackGround})` }}></div>

            </div>

            <div className='text-center mt-1 pt-0'>
                <h1 className='text-white text-[90px] mt-0 pt-0'>{tempEntero}<span className='text-[35px] text-[#A09FB1]'>°{unit === 'imperial' ? 'F' : 'C'}</span></h1>
                <h2 className='text-[#A09FB1] text-[35px] pb-4 font-semibold'>{descriptionWeather}</h2>
                <CurrentDay />
                
                <div className='flex left-0 right-0 mx-auto justify-center py-4'>
                    <img src="/location.png" alt="" className='h-[18px] px-1' />
                    <span className='text-[#88869D] text-[15px]'>{name}</span>
                </div>
            </div>

        </div>
    );
}