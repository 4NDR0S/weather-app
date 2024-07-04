import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import ForecastsItem from './ForecastsItem'

export default function ForecastDays() {
  const { forecastApi, unit } = useContext(DataContext)

  if (!forecastApi || !forecastApi.list || forecastApi.list.length === 0) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  const list = forecastApi.list;

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayName} ${day < 10 ? '0' : ''}${day} ${month}`;
  };

  const day1 = list[5];
  const nameDay = getFormattedDate(day1.dt_txt);
  const day1Img = `${day1.weather[0].icon.slice(0, 2)}.png`
  const day1Des = `${day1.weather[0].description}`
  const maxtemp_day1 = Math.floor(day1.main.temp_max)
  const mintemp_day1 = Math.floor(list[11].main.temp_min)

  const day2 = list[13];
  const nameDay2 = getFormattedDate(day2.dt_txt);
  const dayImg2 = `${day2.weather[0].icon.slice(0, 2)}.png`
  const dayDes2 = `${day2.weather[0].description}`
  const maxtemp_day2 = Math.floor(day2.main.temp_max)
  const mintemp_day2 = Math.floor(list[19].main.temp_min)

  const day3 = list[21];
  const nameDay3 = getFormattedDate(day3.dt_txt);
  const dayImg3 = `${day3.weather[0].icon.slice(0, 2)}.png`
  const dayDes3 = `${day3.weather[0].description}`
  const maxtemp_day3 = Math.floor(day3.main.temp_max)
  const mintemp_day3 = Math.floor(list[27].main.temp_min)

  const day4 = list[29];
  const nameDay4 = getFormattedDate(day4.dt_txt);
  const dayImg4 = `${day4.weather[0].icon.slice(0, 2)}.png`
  const dayDes4 = `${day4.weather[0].description}`
  const maxtemp_day4 = Math.floor(day4.main.temp_max)
  const mintemp_day4 = Math.floor(list[35].main.temp_min)

  const day5 = list[37];
  const nameDay5 = getFormattedDate(day5.dt_txt);
  const dayImg5 = `${day5.weather[0].icon.slice(0, 2)}.png`
  const dayDes5 = `${day5.weather[0].description}`
  const maxtemp_day5 = Math.floor(day5.main.temp_max)
  const mintemp_day5 = Math.floor(list[39].main.temp_min)


  return (
    <div className='left-0 right-0 mx-auto py-6 w-full flex flex-wrap gap-8
    sm:flex sm:flex-wrap sm:w-[full] sm:left-0 sm:right-0 sm:mx-auto'>
      <ForecastsItem
        currentDay={nameDay}
        dayImg={day1Img}
        imgDesc={day1Des}
        maxTemp={maxtemp_day1}
        minTemp={mintemp_day1}
      />

      <ForecastsItem
        currentDay={nameDay2}
        dayImg={dayImg2}
        imgDesc={dayDes2}
        maxTemp={maxtemp_day2}
        minTemp={mintemp_day2}
      />

      <ForecastsItem
        currentDay={nameDay3}
        dayImg={dayImg3}
        imgDesc={dayDes3}
        maxTemp={maxtemp_day3}
        minTemp={mintemp_day3}
      />

      <ForecastsItem
        currentDay={nameDay4}
        dayImg={dayImg4}
        imgDesc={dayDes4}
        maxTemp={maxtemp_day4}
        minTemp={mintemp_day4}
      />

      <ForecastsItem
        currentDay={nameDay5}
        dayImg={dayImg5}
        imgDesc={dayDes5}
        maxTemp={maxtemp_day5}
        minTemp={mintemp_day5}
      />
    </div>
  )
}
