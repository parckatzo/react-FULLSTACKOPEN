
import Note from './components/Note'
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes) // props.notes es un array 
  const [newNote, setNewNote] = useState("new note...")
  const [showAll, setShowAll] = useState(true)


  const handleNoteChange = (event) =>{
    console.log(event.target.value) //console.log el valor de <form/>
    setNewNote(event.target.value)// setNueva nota = input de form
  }

  const addNote = (event) =>{
    event.preventDefault() //IMPORTANTE PARA QUE NO SE REINICIE LA PAGINA
    const noteObject = {
      content: newNote,  //nueva nota = input de form
      important: Math.random() < 0.5, //50% de ser importante
      id: notes.length + 1, //+1 id 
    }

    setNotes(notes.concat(noteObject)) //setNotes = notes[Array] + noteObject 
    setNewNote("")// string vacio 
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
