
const Form = ({addName, handleNewName, handleNewNumber, handleSame}) => {
  return (
    <div>
        <form onSubmit={addName}>
            <div>
                name : <input onChange={handleNewName}/>
            </div>
            <div>
                number : <input onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit" onClick={handleSame}>add</button>
            </div>
        </form>
    </div>
  )
}

export default Form