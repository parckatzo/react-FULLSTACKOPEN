import { useState } from "react"
import Form from "./componentsApp3/Form"
import Filter from "./componentsApp3/Filter"
import Persons from "./componentsApp3/Persons"


const App3 = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [same, setSame] = useState(false)
    const [newNumber, setNewNumber] = useState (0)
    const [nameFilter, setNameFilter] = useState('')

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilter = (event) =>{
        setNameFilter(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        const newAddName = {
            name: newName,
            number: newNumber,
            id : persons.length + 1
        }
        same ? same : setPersons(persons.concat(newAddName))
    }
    
    const handleSame = () =>{
        setSame(persons.some(person => person.name === newName))
        same ? alert(`${newName} is already added to phonebook`) : same
        console.log(same)
    }

    const filterName = nameFilter === "" ? persons : persons.filter((a) => a.name.match(nameFilter))



  return (
    <div>
        <h2>Phonebook</h2>
        <Filter handleFilter={handleFilter}/>
        <h2>Add a new</h2>
        <Form 
        addName={addName} 
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        handleSame={handleSame}/>
        <h2>Numbers</h2>
        <Persons 
        filterName={filterName}/>
    </div>
  )
}

export default App3