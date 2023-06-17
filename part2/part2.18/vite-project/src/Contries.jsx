import Languages from "./Languages"

const Contries = ({countriesFilter}) => {
    if (countriesFilter.length >= 10){
        return <p>Too many matches, specify another file</p>
    }else if(countriesFilter.length> 1){
        return (
            <div>
                {countriesFilter.map(name =>
                <p>{name.name.common}</p>
                )}
            </div>
          )
    }else if(countriesFilter.length === 1){
        const country = countriesFilter[0]
        return(
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map(e =>
                        <li key={e}>{e}</li>
                    )}
                </ul>
                <img  src={country.flags.svg} alt={country.flags.alt}/>
            </div>
        )
    }
}

export default Contries