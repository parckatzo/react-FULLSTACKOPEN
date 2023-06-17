import Countries from "./Countries"
import Selected from "./Selected"

const Contries = ({ countriesFilter}) => {


    if (countriesFilter.length >= 10) {
        return <p>Too many matches, specify another file</p>

    } else if (countriesFilter.length > 1) {
        return (
            <div>
                {countriesFilter.map((ct) =>
                        <Selected country={ct}/>
                )}
            </div>
        )
    } else if (countriesFilter.length === 1) {
        const country = countriesFilter[0]
        return (
            <div>
                <Countries country={country} />
            </div>
        )
    }
}

export default Contries