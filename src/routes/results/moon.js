
import * as SunCalc from 'suncalc';

// @ts-ignore
export function getMoonImage(date){

	const images = [
		'Luna1.png',
		'Luna2.png',
		'Luna3.png',
		'Luna4.png',
		'Luna5.png',
		'Luna6.png',
		'Luna7.png',
		'Luna8.png',
		'Luna9.png',
		'Luna10.png',
		'Luna11.png',
		'Luna12.png',
		'Luna13.png',
		'Luna14.png',
		'Luna15.png',
		'Luna16.png',
		'Luna17.png',
		'Luna18.png',
		'Luna19.png',
		'Luna20.png',
		'Luna21.png',
		'Luna22.png',
		'Luna23.png',
		'Luna24.png',
		'Luna25.png',
		'Luna26.png',
		'Luna29.png',
		'Luna27.png',
		'Luna28.png',
	];



	const moonIllumination = SunCalc.getMoonIllumination(date);

	// Calcula la fase lunar basada en la fracción iluminada
	const phase = Math.round(moonIllumination.phase * 29.5);

	// Obtén la imagen correspondiente a la fase lunar
	const moonImage = images[phase + 1];

    return moonImage;
}

