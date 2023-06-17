
const Countries = ({ country }) => {
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
    </div>
  )
}

export default Countries