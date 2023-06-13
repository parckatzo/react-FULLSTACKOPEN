
import Note from './components/Note'
import App2 from './App2'
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
  }

  const handleNoteChange = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) =>{
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
          <input 
          value={newNote}
          onChange={handleNoteChange}/>
          <button type='submit'> save</button>
      </form>
      <App2></App2>
    </div>
  )
}


export default App
