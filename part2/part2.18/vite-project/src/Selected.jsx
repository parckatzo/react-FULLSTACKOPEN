import { useState } from "react"
import Countries from "./Countries"


const Selected = ({ country }) => {

    const [selectedCountry, setSelectedCountry] = useState(false)
    const handleShow = () => {
        setSelectedCountry((selectedCountry) => !selectedCountry)
    }
    return (
        <div>
            <button onClick={handleShow}>{selectedCountry ? 'Hide' : 'Show'}</button>
            {selectedCountry ? <Countries country={country}/>: null}
        </div>
    )
}

export default Selected