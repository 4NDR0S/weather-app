import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'

const weatherBackGround = '/Cloud-background.png'

// Importa las imágenes
const clearImage = '/Clear.png';
const cloudyImage = '/HeavyCloud.png';
const rainyImage = '/HeavyRain.png';
const snowyImage = '/Snow.png';

const imageMap = {
    clear: clearImage,
    clouds: cloudyImage,
    rain: rainyImage,
    snow: snowyImage,
};

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
    

    // Obtén la imagen correspondiente a la descripción del clima
    const weatherDescription = weather[0].description.toLowerCase();
    const weatherImage = Object.keys(imageMap).find(key => weatherDescription.includes(key))
        ? imageMap[Object.keys(imageMap).find(key => weatherDescription.includes(key))]
        : null;

    return (
        <div className='bg-[#1E213A] w-[400px]'>
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
                    {weatherImage && (
                        <img src={weatherImage} alt={weatherDescription}
                            className='left-0 right-0 mx-auto relative z-1000 w-[150px] pt-[80px]' />
                    )}
                </div>

                <div className='h-[300px] opacity-[10%] w-auto bg-center z-1 mt-[-220px]' style={{ backgroundImage: `url(${weatherBackGround})` }}></div>

            </div>
            
            <div className='text-center'>
                <h1 className='text-white text-[90px]'>{tempEntero}<span className='text-[35px] text-[#A09FB1]'>°{unit === 'imperial' ? 'F' : 'C'}</span></h1>
                <h2 className='text-[#A09FB1] text-[35px]'>{descriptionWeather}</h2>
                <p className='text-[#A09FB1] text-[15px]'>{name}</p>

                <div className='flex justify-center space-x-4 mt-4'>
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
            </div>

        </div>
    );
}