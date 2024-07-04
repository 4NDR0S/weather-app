import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import CurrentDay from './CurrentDay';

const weatherBackGround = '/Cloud-background.png'


export default function TodayBox() {
    const { api, loading, error, changeUnit, unit } = useContext(DataContext);

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

    console.log(weather, name);

    // main.temp en un variable sin decimales
    const tempEntero = Math.floor(main.temp);

    // descripccion del clima
    const descriptionWeather = weather[0].main
    

    return (
        <div className="font-raleway bg-[#1E213A] w-[400px] mb-0">
            <div className='p-4 flex justify-between'>
                <div className='bg-[#6E707A] w-[160px] text-center'>
                    <button className='text-[#E7E7EB] py-2'>Search for places</button>
                </div>
                <div className='bg-[#6E707A]'>
                    <button>+</button>
                </div>
            </div>
            <div className=''>
                <div className='w-full'>
                    <img src={`${weather[0].icon.slice(0, 2)}.png`} alt={`${weather[0].description}`}
                    className='left-0 right-0 mx-auto relative z-1000 w-[150px] pt-[80px]' />
                </div>

                <div className='h-[300px] opacity-[10%] w-auto bg-center z-1 mt-[-220px]' style={{ backgroundImage: `url(${weatherBackGround})` }}></div>

            </div>
            
            <div className='text-center'>
                <h1 className='text-white text-[90px]'>{tempEntero}<span className='text-[35px] text-[#A09FB1]'>°{unit === 'imperial' ? 'F' : 'C'}</span></h1>
                <h2 className='text-[#A09FB1] text-[35px]'>{descriptionWeather}</h2>
                <CurrentDay/>
                <p className='text-[#A09FB1] text-[15px]'>{name}</p>
            </div>

        </div>
    );
}