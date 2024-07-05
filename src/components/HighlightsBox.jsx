import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider';
import Wind from './highlights/Wind'
import Humidity from './highlights/Humidity';
import Pressure from './highlights/Pressure';
import Visibility from './highlights/Visibility';

export default function HighlightsBox() {
    const { api, loading, error } = useContext(DataContext);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>
            <h2 className='text-[#E7E7EB] font-bold text-[24px] py-6'>Today's Highlights</h2>
            <div className='flex flex-wrap gap-8
            sm:gap-14'>
                <Wind/>
                <Humidity/>
                <Visibility/>
                <Pressure/>
            </div>
        </>
    )
}
