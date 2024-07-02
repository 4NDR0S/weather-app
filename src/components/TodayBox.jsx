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
    const { api, main, weather, name, setApi } = useContext(DataContext);

    // Verifica que weather esté definido y tenga al menos un elemento
    if (!weather || weather.length === 0) {
        return <p>Loading...</p>;
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
                <div className='bg-[#6E707A] h-[40px] w-[160px] text-center'>
                    <button>Search for places</button>
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

                <h1 className='text-white text-[90px]'>{tempEntero}<span className='text-[35px] text-[#A09FB1]'>°F</span></h1>
                <h2 className='text-[#A09FB1] text-[35px]'>{descriptionWeather}</h2>
                
                <p className='text-[#A09FB1] text-[15px]'>{name}</p>
            </div>

        </div>
    );
}