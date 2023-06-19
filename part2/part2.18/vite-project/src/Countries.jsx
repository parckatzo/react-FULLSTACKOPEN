import axios from "axios"
import { useEffect, useState } from "react"
const Countries = ({ country }) => {

  const [weather, setWeather] = useState(0)
  const [wind, setWind ] = useState(0)
  const [icon, setIcon] = useState('')
  console.log(icon)

  const celcius = weather - 273.15

  useEffect(() => { axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${import.meta.env.VITE_API_KEY}`
    )
    .then(response =>{
      setWeather(response.data.main.temp)
      setWind(response.data.wind.speed)
      setIcon(response.data.weather[0])
    })}, [])
 
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital : {country.capital}</p>
      <p>area : {country.area}</p>
      <p>Timezones {country.timezones}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(e =>
          <li key={e}>{e}</li>
        )}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} />
      <h3>Weater in {country.capital}</h3>
      <p>Temperature is {celcius.toFixed(2)} celcius</p>
      <img src={`https://openweathermap.org/img/wn/${icon.icon}@2x.png`} alt={icon.description} />
      <p>wind {wind} m/s</p>
    </div>
  )
}

export default Countries