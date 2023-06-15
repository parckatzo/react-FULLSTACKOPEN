import { useEffect, useState } from "react"
import Form from "./componentsApp3/Form"
import Filter from "./componentsApp3/Filter"
import Persons from "./componentsApp3/Persons"
import axios from "axios"


const App3 = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [same, setSame] = useState(false)
    const [newNumber, setNewNumber] = useState (0)
    const [nameFilter, setNameFilter] = useState('')

    useEffect(() => {
        console.log('Effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data);
            })
    }, [])
    console.log('render',persons.length, 'persons')

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
        setNewName("");
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