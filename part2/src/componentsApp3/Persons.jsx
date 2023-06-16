import Person from "./Person"

const Persons = ({filterName, handleDelete}) => {
  return (
    <div>
          <ul>
            {filterName.map(p => 
                <Person 
                key={p.id}
                name={p}
                number={p}
                handleDelete={() => handleDelete(p.id, p.name)}/>
            )}
        </ul>
    </div>
  )
}

export default Persons