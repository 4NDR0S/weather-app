import React, { createContext, useEffect, useState } from 'react'

const idkey = '1207561af4bd33f3b574041404ab197e'

export const DataContext = createContext();

export default function DataProvider({ children }) {
    const [unit, setUnit] = useState('imperial'); // Estado para la unidad (imperial(°F) o metric(°C))
    const [api, setApi] = useState({});
    const [forecastApi, setForecastApi] = useState({});
    const [city, setCity] = useState('lima');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    // Prevención de errores
    const [loading, setLoading] = useState(true);
    const [forecastLoading, setForecastLoading] = useState(true);
    const [error, setError] = useState(null);
    const [forecastError, setForecastError] = useState(null);

    const getData = async (unit, lat, lon, city) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${idkey}&units=${unit}`;
        if (lat && lon) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${idkey}&units=${unit}`;
        }
        try {
            const rs = await fetch(url);
            if (!rs.ok) throw new Error('La respuesta de la red no fue satisfactoria');
            const rsJson = await rs.json();
            setApi(rsJson);
        } catch (err) {
            console.error("Error al obtener datos: ", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const getForecastData = async (unit, lat, lon, city) => {
        let url_fore = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${idkey}&units=${unit}`;
        if (lat && lon) {
            url_fore = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${idkey}&units=${unit}`;
        }
        try {
            const rs = await fetch(url_fore);
            if (!rs.ok) throw new Error('La respuesta de la red no fue satisfactoria');
            const rsJson = await rs.json();
            setForecastApi(rsJson);
        } catch (err) {
            console.error("Error al obtener datos del pronóstico: ", err);
            setForecastError(err);
        } finally {
            setForecastLoading(false);
        }
    };

    useEffect(() => {
        getData(unit, lat, lon, city);
        getForecastData(unit, lat, lon, city);
    }, [unit, city, lat, lon]);

    const changeUnit = (newUnit) => {
        setUnit(newUnit);
        setLoading(true);
        setError(null);
        setForecastLoading(true);
        setForecastError(null);
    };

    const updateCity = (newCity) => {
        setCity(newCity);
        setLat(null);
        setLon(null);
        setLoading(true);
        setForecastLoading(true);
        setError(null);
        setForecastError(null);
    };

    const updateLocation = (latitude, longitude) => {
        setLat(latitude);
        setLon(longitude);
        setCity('');
        setLoading(true);
        setForecastLoading(true);
        setError(null);
        setForecastError(null);
    };

    return (
        <DataContext.Provider value={{ api, forecastApi, loading, forecastLoading, error, forecastError, changeUnit, unit, updateCity, updateLocation }}>
            {children}
        </DataContext.Provider>
    );
}