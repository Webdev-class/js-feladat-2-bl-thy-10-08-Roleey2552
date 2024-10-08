
const APIAddress = 'https://archive-api.open-meteo.com/v1/archive?';

async function f1(lat, long, timeStr) {
    const startDate = timeStr; 
    const endDate = timeStr; 

    
    const url = `${APIAddress}latitude=${lat}&longitude=${long}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Hálózati hiba');
        }
        const data = await response.json();

        
        const maxTemp = data.daily.temperature_2m_max[0];
        const minTemp = data.daily.temperature_2m_min[0];

        
        const avgTemp = Math.floor((maxTemp + minTemp) / 2);
        
        return avgTemp; 
    } catch (error) {
        console.error('Hiba történt fetcheléskor:', error);
    }
}

module.exports = f1;
