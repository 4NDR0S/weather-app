import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()

export default function DataProvider({ children }) {
    // 20.426935893227235, -86.92197531426388  = Cozumel lat&ton
    const url_prueba = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

    const base_url = url_prueba

    const [api, setApi] = useState({})

    const getData = async (url, callback) => {
        const rs = await fetch(url)
        const rsJson = await rs.json()
        console.log(rsJson);

        callback(rsJson)
    }

    useEffect(() => {
        getData(base_url, setApi)
    }, [])
    return (
        <DataContext.Provider value={api}>
            {children}
        </DataContext.Provider>
    )
}
