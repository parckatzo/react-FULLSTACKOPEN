
import axios from 'axios'
import Note from './components/Note'
import { useEffect, useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([]) // notes es un array 
  const [newNote, setNewNote] = useState("new note...")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
          console.log('promise fulfilled')
          setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const handleNoteChange = (event) =>{
    setNewNote(event.target.value)// setNueva nota = input de form
  }

  const addNote = (event) =>{
    event.preventDefault() //IMPORTANTE PARA QUE NO SE REINICIE LA PAGINA
    const noteObject = {
      content: newNote,  //nueva nota = input de form
      important: Math.random() < 0.5, //50% de ser importante
    }

    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })

  }

  const notesToShow = showAll // si showAll is true ? mostrara todas las notas : si es falso filtrara las notas  
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
          <input 
          value={newNote}
          onChange={handleNoteChange}/>
          <button type='submit'> save</button>
      </form>
    </div>
  )
}


export default App
