
import * as SunCalc from 'suncalc';

export async function load ({url}) {

    const date1 = url.searchParams.get('date1') 
    const date2 = url.searchParams.get('date2') 

    let moon1 = await fetch(`https://lunarconnection.org/api/moon?date=${date1}`);
    moon1 = await moon1.json();

    let moon2 = await fetch(`https://lunarconnection.org/api/moon?date=${date2}`);
    moon2 = await moon2.json();

    return {
        moon1,
        moon2
    }

}

