import Countries from "./Countries"

const Contries = ({ countriesFilter, handleShow, selectedCountry }) => {


    if (countriesFilter.length >= 10) {
        return <p>Too many matches, specify another file</p>

    } else if (countriesFilter.length > 1) {
        return (
            <div>
                {countriesFilter.map((ct) =>
                    <p>{ct.name.common}
                        <button onClick={handleShow}>{selectedCountry ? 'Hide' : 'Show'}</button>
                        {selectedCountry ? <Countries country={ct} /> : null}
                    </p>
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