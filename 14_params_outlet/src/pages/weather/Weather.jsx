import axios from "axios";
import { useEffect, useState } from "react";

// Способи передати дані під час запиту
// UrlParams або QueryParams (після ? у адресі). Працюють у всіх http методах (get, post, put....)
// https://api.com?key=value&page=1&lang=uk

// Headers (спеціальне налаштування для запиту). Працюють у всіх http методах (get, post, put....)
// https://api.com
// -H "key: value"
// -H "Content-Type: application/json"
// const url = `http://api.ipinfo.io/lite/${ip}`;
//         const response = await axios.get(url, {
//             headers: {
//                 "Authorization": "Bearer 419613f902d152"
//             }
//         });


// Body (спеціальне налаштування для запиту). Працюють у post, put, patch
// { "key": "value", "name": "user" }

function Weather() {
    const [weather, setWeather] = useState(null);

    // ковертує unixtime у об'єкт Date
    function unixTimeToDate(time) {
        const date = new Date(time * 1000);
        return date;
    }

    function timeToHtml(time) {
        const date = unixTimeToDate(time);
        return dateToTime(date);
    }

    // конвертує date у формат h:mm:ss
    function dateToTime(date) {
        let sec = date.getSeconds().toString();
        sec = sec < 10 ? "0" + sec : sec;

        let min = date.getMinutes().toString();
        min = min < 10 ? "0" + min : min;

        let hours = date.getHours().toString();
        hours = hours < 10 ? "0" + hours : hours;

        return `${hours}:${min}:${sec}`;
    }

    async function fetchWeather(coords = null) {
        const city = "Ужгород";
        const apiKey = "dd60f517493f0c8255161c7f71e9f923";
        const lang = "uk";
        const units = "metric";        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`;
        
        if(coords) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=${units}&lang=${lang}`;
        }

        try {
            const response = await axios.get(url);
            const { data } = response;
            setWeather(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Запитуємо розташування користувача
    function successLocation(pos) {
        const { latitude, longitude } = pos.coords;
        fetchWeather({lat: latitude, lon: longitude});
    }

    async function errorLocation(error) {
        const responseIp = await axios.get("https://api.ipify.org");
        const ip = responseIp.data;
    
        const url = `https://api.ipgeolocation.io/v3/ipgeo?apiKey=fdec058a5c3143afb45fd1b078226893&ip=${ip}`;
        const response = await axios.get(url);

        const {data} = response;
        const coords = {
            lat: data.location.latitude,
            lon: data.location.longitude
        }

        await fetchWeather(coords);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            successLocation,
            errorLocation,
        );
    }, []);

    useEffect(() => {
        fetchWeather();
    }, []);

    if (!weather) {
        return <h2>Зачекайте. Погода завантажується</h2>;
    }

    return (
        <>
            <h2>Погода у {weather.name}</h2>
            <div style={{ textAlign: "center" }}>
                <img
                    width="100px"
                    height="100px"
                    alt="icon"
                    src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
                />
            </div>
            <div>Температура {weather.main.temp} °C</div>
            <div>Тиск {weather.main.pressure} мбара</div>
            <div>Швидкість вітру {weather.wind.speed} м/с</div>
            <div>Пориви вітру {weather.wind.gust} м/с</div>
            <div>Схід сонця: {timeToHtml(weather.sys.sunrise)}</div>
            <div>Захід сонця: {timeToHtml(weather.sys.sunset)}</div>
        </>
    );
}

export default Weather;
