import { useState } from "react"
import Person from "./componentsApp3/Person"


const App3 = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'},
        {name: 'Caco Xellas'}
    ])
    const [newName, setNewName] = useState('')

    const [same, setSame] = useState(false)


    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        const newAddName = {
            name: newName
        }
        same ? same : setPersons(persons.concat(newAddName))
    }
    
    const handleSame = () =>{
        setSame(persons.some(person => person.name === newName))
        same ? alert(`${newName} is already added to phonebook`) : same
        console.log(same)
    }




  return (
    <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
            <div>
                name : <input onChange={handleNewName}/>
            </div>
            <div>
                <button type="submit" onClick={handleSame}>add</button>
            </div>
        </form>
        <h2>Numbers</h2>
        <ul>
            {persons.map(p => 
                <Person 
                key={p.name}
                name={p}/>
            )}
        </ul>
    </div>
  )
}

export default App3