import { useEffect, useState } from "react"
import Form from "./componentsApp3/Form"
import Filter from "./componentsApp3/Filter"
import Persons from "./componentsApp3/Persons"
import namesService from "./services/names"

const App3 = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [same, setSame] = useState(false)
    const [newNumber, setNewNumber] = useState (0)
    const [nameFilter, setNameFilter] = useState('')

    useEffect(() => {
        namesService
            .getAll()
            .then(response => {
                setPersons(response);
                console.log(response)
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
        }
        if(same === true){
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)){
                const personSearch = persons.find(a => a.name === newName)
                const personId = personSearch.id
                const changedNumber = {...personSearch, number : newNumber}

                console.log('personSearch',personId)
                 namesService
                    .update(personId, changedNumber)
                    .then(response =>{
                        setPersons(persons.map(p => p.id !== personId ? p : response))
                    })
            }
        }else{
         namesService
            .create(newAddName)
            .then(response =>{
                setPersons(persons.concat(response))
                }
            )
        }
    }
    
    const handleSame = () =>{
        setSame(persons.some(person => person.name === newName))
    }

    const handleDelete = (id, name) => {
        window.confirm(`delete ${name} ?`)
        ? namesService
            .deleteObject(id)
            .then(response => {
                setPersons(persons.filter(n => n.id !== id))
            }) 
        : console.log('cancel')
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
        filterName={filterName}
        handleDelete={handleDelete}/>
    </div>
  )
}

export default App3