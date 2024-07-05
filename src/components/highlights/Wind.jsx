import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'

// Definir la tabla de direcciones
const directionTable = [
  { abbrev: 'N', degrees: 0 },
  { abbrev: 'NNE', degrees: 22.5 },
  { abbrev: 'NE', degrees: 45 },
  { abbrev: 'ENE', degrees: 67.5 },
  { abbrev: 'E', degrees: 90 },
  { abbrev: 'ESE', degrees: 112.5 },
  { abbrev: 'SE', degrees: 135 },
  { abbrev: 'SSE', degrees: 157.5 },
  { abbrev: 'S', degrees: 180 },
  { abbrev: 'SSW', degrees: 202.5 },
  { abbrev: 'SW', degrees: 225 },
  { abbrev: 'WSW', degrees: 247.5 },
  { abbrev: 'W', degrees: 270 },
  { abbrev: 'WNW', degrees: 292.5 },
  { abbrev: 'NW', degrees: 315 },
  { abbrev: 'NNW', degrees: 337.5 },
];

// Función para obtener la abreviatura de la dirección
const getDirectionAbbreviation = (degrees) => {
  // Ajustar grados para valores negativos o superiores a 360
  degrees = degrees % 360;
  if (degrees < 0) degrees += 360;

  let abbreviation = 'N'; // Default value

  directionTable.forEach((current, i) => {
    const next = directionTable[(i + 1) % directionTable.length];
    if (degrees >= current.degrees && degrees < next.degrees) {
      abbreviation = current.abbrev;
    }
  });

  return abbreviation;
};


export default function Wind() {
  const { api, unit } = useContext(DataContext);

  const { wind } = api

  const windSpeed = Math.floor(wind.speed)


  const directionAbbrev = getDirectionAbbreviation(wind.deg);
  // console.log(wind.deg);

  return (
    <div className='w-[330px] h-[200px] bg-[#1E213A] text-center p-4
    sm:w-[360px]'>
      <h3 className='font-medium text-[#E7E7EB]'>Wind Status</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>{windSpeed} <span> </span> <span className=' text-[#E7E7EB] text-[36px] font-medium'>{unit === 'imperial' ? 'mph' : 'm/s'}</span></h4>
      </div>
      <div className='flex justify-center'>
        <div className='h-[33px] w-[33px] bg-[#585676] rounded-full mx-2 flex items-center justify-center'>
          <img
            src="/navigation.png"
            alt=""
            className="h-6"
            style={{ transform: `rotate(${wind.deg}deg)` }}
          />
        </div>
        <span className="text-[15px] font-medium text-[#E7E7EB] pt-1">{directionAbbrev}</span>
      </div>

    </div>
  )
}
