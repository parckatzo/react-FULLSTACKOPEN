import { useState } from "react"
import Countries from "./Countries"


const Selected = ({ country }) => {

    const [selectedCountry, setSelectedCountry] = useState(false)

    const handleShow = () => {
        setSelectedCountry((selectedCountry) => !selectedCountry)
    }

    return (
        <div>
            <p>{country.name.common}
            <button onClick={handleShow}>{selectedCountry ? 'Hide' : 'Show'}</button>
            </p>
            {selectedCountry ? <Countries country={country}/>: null}
        </div>
    )
}

export default Selected