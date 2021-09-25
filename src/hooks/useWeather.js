import { useEffect, useState } from "react"

export const useWeather = () =>{
    const [loaded,setLoaded] = useState(true);
    const [name,setName] = useState(null);
    const [degrees,setDegrees] = useState(null)

    const getWeather = async() =>{
        setLoaded(false)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=México&appid=e4639b4e6a395b0a641e2860c3265ac2&units=metric&lang=es`);
        const data = await res.json();
        mapData(data)
        setLoaded(true)
    }

    const getWeatherGeo = () =>{
        setLoaded(false)
        navigator.geolocation.getCurrentPosition(async(position)=>{
            const {latitude,longitude} = position.coords;
            console.log(position)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e4639b4e6a395b0a641e2860c3265ac2&units=metric&lang=es`);
            const data = await res.json();
            mapData(data)
            setLoaded(true)
        },(err)=>{
            if(err) alert(err.message);
        },{enableHighAccuracy: true, maximumAge: 10000})
    }

    useEffect(()=>{
        getWeather();
    },[]);

    const mapData = (data) =>{
        setName(data.name);
        setDegrees(Math.round(data.main.temp))
    }

    return {loaded,getWeather,getWeatherGeo,name,degrees};
}