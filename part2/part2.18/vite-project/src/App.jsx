import { useEffect, useState } from "react"
import countriesService from "./services/countries"

function App() {



const [countries, setCountries] = useState("")

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response)
        console.log(response)
      })
  }, [])

  const handleNewName = (event) =>{
    const str = event.target.value
    setCountries(str.charAt(0).toUpperCase() + str.slice(1))
  }

  const countriesFilter = handleNewName === ""  ? "XD" : countries.filter(c => c.name.match(handleNewName))

  return (
    <div>
     <p>find countries <input type="text" onChange={handleNewName}/></p>
     <p>{countriesFilter}</p>
     
    </div>
  )
}

export default App
