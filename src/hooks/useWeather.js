import { useEffect, useState } from "react"

export const useWeather = () =>{
    const [loaded,setLoaded] = useState(true);
    const [name,setName] = useState(null);
    const [degrees,setDegrees] = useState(null);
    const [desc,setDesc] = useState(null)
    const [lat,setLat] = useState(null);
    const [lon,setLon] = useState(null);
    const [hum,setHum] = useState(null);
    const [max,setMax] = useState(null);
    const [min,setMin] = useState(null);

    const getWeather = async() =>{
        setLoaded(false)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=México&appid=e4639b4e6a395b0a641e2860c3265ac2&units=metric`);
        const data = await res.json();
        mapData(data)
        setLoaded(true)
    }

    const getWeatherGeo = () =>{
        setLoaded(false)
        navigator.geolocation.getCurrentPosition(async(position)=>{
            const {latitude,longitude} = position.coords;
            console.log(position)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e4639b4e6a395b0a641e2860c3265ac2&units=metric`);
            const data = await res.json();
            console.log(data)
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
        setDesc(data.weather[0].description)
        setLat(data.coord.lat);
        setLon(data.coord.lon);
        setMax(Math.round(data.main.temp_max));
        setMin(Math.round(data.main.temp_min));
        setHum(data.main.humidity);
    }

    return {loaded,getWeather,getWeatherGeo,name,degrees,desc,lat,lon,max,min,hum};
}