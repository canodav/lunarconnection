
import * as SunCalc from 'suncalc';

export async function load ({url}) {

    const date1 = url.searchParams.get('date1') 
    const date2 = url.searchParams.get('date2') 

    const moon1 = await fetch(`https://lunarconnection.org/api/moon?date=${date1}`);
    const moon2 = await fetch(`https://lunarconnection.org/api/moon?date=${date1}`);


    const moon1 = await getMoonImage(new Date(date1));
    const moon2 = await getMoonImage(new Date(date2));

    return {
        moon1,
        moon2
    }

}

