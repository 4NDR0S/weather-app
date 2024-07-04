import React from 'react'

export default function CurrentDay() {
  const date = new Date()

    //obtener el dia de la semana
    const diasSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const diaSemana = diasSemana[date.getDate]

    //obetener el dia del mes
    const day = date.getDate()

    //obtener el mes
    const meses = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ]
    const mesActual = meses[date.getMonth()]


    return (
        <p className='text-[#A09FB1]' >Today - {diaSemana} {day} {mesActual}</p>
    )
}
