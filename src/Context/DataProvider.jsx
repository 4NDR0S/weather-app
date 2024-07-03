import React, { createContext, useEffect, useState } from 'react'

const idkey = '1207561af4bd33f3b574041404ab197e'

const lat = '20.42'
const lon = '-86.92'

export const DataContext = createContext()

export default function DataProvider({ children }) {
    const [unit, setUnit] = useState('imperial'); // Estado para la unidad (imperial o metric)
    const [api, setApi] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async (unit) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${idkey}&units=${unit}`;
        try {
            const rs = await fetch(url);
            if (!rs.ok) throw new Error('La respuesta de la red no fue satisfactoria');
            const rsJson = await rs.json();
            console.log(rsJson);
            setApi(rsJson);
        } catch (err) {
            console.error("Error al obtener datos: ", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData(unit);
    }, [unit]);

    const changeUnit = (newUnit) => {
        setUnit(newUnit);
        setLoading(true);
        setError(null);
    };

    return (
        <DataContext.Provider value={{ api, loading, error, changeUnit, unit }}>
            {children}
        </DataContext.Provider>
    );
}