
import Note from './components/Note'
import App2 from './App2'


const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <App2></App2>
    </div>
  )
}


export default App
