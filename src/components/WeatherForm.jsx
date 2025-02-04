import React from 'react';

export const WeatherForm = ({city,setCity}) => {
    
    
    console.log('')
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ingresa una ciudad"
            />
            <button type="submit">Obtener Clima</button>
        </form>
    );
};
