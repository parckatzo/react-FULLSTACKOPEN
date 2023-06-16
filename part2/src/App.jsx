
import Note from './components/Note'
import { useEffect, useState } from 'react'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([]) // notes es un array 
  const [newNote, setNewNote] = useState("new note...")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const toggleImportanceOf = (id)  =>{
    const note = notes.find(n => n.id === id)  //note = notas.find (notas => si notas.id es igual === a (id))
    const changedNote = {...note, important: !note.important } //cambiar importancia true= false / viceversa

    console.log('note', note)
    console.log('change', changedNote)
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response))
    })
      .catch(error =>{
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
    })

  }

  const addNote = (event) =>{
    event.preventDefault() //IMPORTANTE PARA QUE NO SE REINICIE LA PAGINA
    const noteObject = {
      content: newNote,  //nueva nota = input de form
      important: Math.random() < 0.5, //50% de ser importante
    }
    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response))
        setNewNote('')
      })
      .catch(error =>{
        console('ERROR')
      })
  }
  const handleNoteChange = (event) =>{
    setNewNote(event.target.value)// setNueva nota = input de form
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
          <Note 
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          />
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
