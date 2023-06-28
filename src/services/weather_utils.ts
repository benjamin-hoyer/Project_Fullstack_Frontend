import axios from "axios";
import {error} from "@sveltejs/kit";

function direction(wind_direction: number) {
    if (wind_direction >= 11.25 && wind_direction < 33.75)
        return "Nord Nord Ost";
    else if (wind_direction >= 33.75 && wind_direction < 56.25)
        return "Nord Ost";
    else if (wind_direction >= 56.25 && wind_direction < 78.75)
        return "Ost Nord Ost";
    else if (wind_direction >= 78.75 && wind_direction < 101.25)
        return "Ost";
    else if (wind_direction >= 101.25 && wind_direction < 123.75)
        return "Ost Süd Ost";
    else if (wind_direction >= 123.75 && wind_direction < 146.25)
        return "Süd Ost";
    else if (wind_direction >= 146.25 && wind_direction < 168.75)
        return "Süd Süd Ost";
    else if (wind_direction >= 168.75 && wind_direction < 191.25)
        return "Süd";
    else if (wind_direction >= 191.25 && wind_direction < 213.75)
        return "Süd Süd West";
    else if (wind_direction >= 213.75 && wind_direction < 236.25)
        return "Süd West";
    else if (wind_direction >= 236.25 && wind_direction < 258.75)
        return "West Süd West";
    else if (wind_direction >= 258.75 && wind_direction < 281.25)
        return "West";
    else if (wind_direction >= 281.25 && wind_direction < 303.75)
        return "West Nord West";
    else if (wind_direction >= 303.75 && wind_direction < 326.25)
        return "West Nord";
    else if (wind_direction >= 326.25 && wind_direction < 348.75)
        return "Nord Nord West";
    else
        return "Nord";
}

function convertBeaufort(wind_speed: number) {
    wind_speed = Math.abs(wind_speed);
    if (wind_speed <= 0.2) {
        return 0;
    } else if (wind_speed <= 1.5) {
        return 1;
    } else if (wind_speed <= 3.3) {
        return 2;
    } else if (wind_speed <= 5.4) {
        return 3;
    } else if (wind_speed <= 7.9) {
        return 4;
    } else if (wind_speed <= 10.7) {
        return 5;
    } else if (wind_speed <= 13.8) {
        return 6;
    } else if (wind_speed <= 17.1) {
        return 7;
    } else if (wind_speed <= 20.7) {
        return 8;
    } else if (wind_speed <= 24.4) {
        return 9;
    } else if (wind_speed <= 28.4) {
        return 10;
    } else if (wind_speed <= 32.6) {
        return 11;
    } else return 12;
}

export async function getWeather(lat: number, long: number) {
    const apiKey = "380fed487173e2913b2006a2902cb45e";
    let reading;
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    return await fetch(requestUrl, {
        mode: 'cors'
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            reading = data.current;
            const description = reading.weather[0].description;
            const temperature = reading.temp;
            const windSpeed = convertBeaufort(reading.wind_speed); //Konvertierung in bft
            const airPressure = reading.pressure;
            const windDirection = direction(reading.wind_wind_direction); //Konvertierung in Words
            const icon = reading.weather[0].icon;
            return {
                description: description,
                temperature: temperature,
                windSpeed: windSpeed,
                airPressure: airPressure,
                windDirection: windDirection,
                icon: icon
            };
        }).catch(error => {
            console.log(error);
            return {code: "", temperature: 0, wind_speed: 0, air_pressure: 0, windDirection: ""};
        });
}

