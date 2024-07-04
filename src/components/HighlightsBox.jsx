import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider';
import Wind from './highlights/Wind'

export default function HighlightsBox() {
    const { api, loading, error, changeUnit, unit } = useContext(DataContext);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const { wind, main, visibility} = api;

    // console.log(api);
    return (
        <>
            <h2 className='text-[#E7E7EB] font-bold text-[24px]'>Today's Highlights</h2>
            <Wind />
        </>
    )
}
