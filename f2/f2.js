/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const APIAddress = 'https://archive-api.open-meteo.com/v1/archive?';

async function f1(lat, long, timeStr) {
    const date = timeStr.split('T')[0]; 
    const hour = timeStr.split('T')[1]; 

    
    const url = `${APIAddress}latitude=${lat}&longitude=${long}&start_date=${date}&end_date=${date}&hourly=temperature_2m&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Halózati hiba');
        }
        const data = await response.json();

        
        const hourIndex = parseInt(hour.split(':')[0]); 
        const temperature = data.hourly.temperature_2m[hourIndex];

        return Math.floor(temperature); 
    } catch (error) {
        console.error('Hiba történt fetcheléskor:', error);
    }
}

module.exports = f1;
