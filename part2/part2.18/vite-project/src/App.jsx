import { useEffect, useState } from "react"
import countriesService from "./services/countriesService"
import Contries from "./Contries"
import axios from "axios"

function App() {
  const [countries, setCountries] = useState([])
  const [weater, setWeather] = useState([])
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response)
        console.log(response)
      })
  }, [])



  const handleNewName = (event) => {
    const str = event.target.value
    setNameFilter(str.toLowerCase())
  }

    const countriesFilter = countries.filter(c => c.name.common.toLowerCase().includes(nameFilter))

    return (
      <div>
        <p>find countries <input type="text" onChange={handleNewName} /></p>
        <Contries countriesFilter={countriesFilter}  />
      </div>
    )
  }


  export default App
